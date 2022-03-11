import { AuthenticationError, ValidationError } from "apollo-server-core";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class LoginInteractor {


    constructor(userAPI){
        this.userApi = userAPI;
    } 
    
    async #userExists(userId, isCache = false)  {
        try {
            const user = await this.userApi.getUser(userId, isCache);
            return user;
        }
        catch {
            throw new ValidationError(`User ${userId} not found`);
        } 
    }

    async #getUserByName(username)  {
        try {
            const user = await this.userApi.getUserByUserName(username);
            return user[0];
        }
        catch {
            throw new ValidationError(`User ${username} not found`);
        } 
    }

    async #passwordHash(password) {
        return await bcrypt.hash(password, 10);
    }

    #createToken(userId){
        return jwt.sign(
            {
                'userId': userId
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '7d'
            }
        );
    }

    async updatePassword({ userId, password }){
        await this.#userExists(userId);
        console.log(userId);
        return this.userApi.updateUser({
            id: userId,
            passwordHash: await this.#passwordHash(password),
            updatedAt: new Date().toISOString()
        });   
    }

    async login({ username, password }){
        const user = await this.#getUserByName(username);
        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

        if(!isPasswordValid) throw new AuthenticationError('Invalid password');
        const token = this.#createToken(user.id);
        return token;
    }

    static isAuthorize(req) {  
        try{
            const [ _, token] = req.headers.authorization.split(' ');
            jwt.verify(token, process.env.JWT_SECRET);
            return  true;
        } catch(e) {
            return false;
        }
    }

    static getUserId(req) {  
        try{
            const [ _, token] = req.headers.authorization.split(' ');
            const { userId } = jwt.verify(token, process.env.JWT_SECRET);
            return  userId;
        } catch(e){
            return null;
        }
    }
}

export default LoginInteractor;