import { ValidationError } from "apollo-server-core";
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

        if(!isPasswordValid) throw new ValidationError('Password not valid');
        const token = jwt.sign(
            {
                'userId': user.id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '7d'
            }
        );

        return token;
    }
}

export default LoginInteractor;