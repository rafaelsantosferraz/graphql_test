import { ValidationError } from "apollo-server-core";
import { v4 as uuidv4 } from 'uuid';
import { User } from "../entities/user";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserInteractor {

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

    async #lastIndex()  {
        const users = await this.userApi.getUsers('', {
            _limit: 1,
            _sort: 'indexRef',
            _order: 'desc'

        });
        return users[0].indexRef;
    }

    async #passwordHash(password) {
        return await bcrypt.hash(password, 10);
    }


    async createUser({ firstName, lastName, userName, password }){
        const user = new User(
            uuidv4(),
            firstName,
            lastName,
            userName,
            await this.#passwordHash(password),
            await this.#lastIndex() + 1,
            new Date().toISOString()
        );
                
        
        return this.userApi.addUser(user.toMap());   
    }

    async updateUser({ userId, firstName, lastName, userName }){
        await this.#userExists(userId);

        return this.userApi.updateUser({
            id: userId,
            firstName,
            lastName,
            userName,
            updatedAt: new Date().toISOString()
        });   
    }

    async deleteUser({ userId }){
        await this.#userExists(userId);
        return this.userApi.deleteUser(userId);   
    }
}

export default UserInteractor;