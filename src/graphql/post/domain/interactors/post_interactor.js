import { ValidationError } from "apollo-server-core";
import { v4 as uuidv4 } from 'uuid';
import { Post } from "../entities/post";

export class PostInteractor {

    constructor(postAPI, userAPI){
        this.postApi = postAPI;
        this.userApi = userAPI;
    }  

    async #userExists(userId)  {
        try {
            const user = await this.userApi.getUser(userId);
            return user.id == userId;
        }
        catch {
            throw new ValidationError(`Post user ${userId} not found`);
        } 
    }

    async #postExists(postId)  {
        try {
            const post = await this.postApi.getPost(postId, false);
        }
        catch {
            throw new ValidationError(`Post with id ${postId} not found`);
        } 
    }

    async #lastIndex()  {
        const posts = await this.userApi.getPost('', {
            _limit: 1,
            _sort: 'indexRef',
            _order: 'desc'

        });
        return posts[0].indexRef;
    }

    async createPost({title, body, userId}){
        await this.#userExists(userId);

        const post = new Post(
            uuidv4(),
            title,
            body,
            userId,
            await this.#lastIndex(),
            new Date().toISOString(), 
        )
        

        return this.postApi.addPost({
            id: post.id,
            title: post.title,
            body: post.body,
            userId: post.userId,
            indexRef: post.indexRef,
            createdAt: post.createdAt
        });   
    }

    async updatePost({postId, title, body}){
        await this.#postExists(postId);

        /* const post = new Post(
            uuidv4(),
            title,
            body,
            userId,
            await this.#lastIndex(),
            new Date().toISOString(), 
        ) */
        
        console.log('hi');

        return this.postApi.updatePost({
            id: postId,
            title: title,
            body: body,
            updatedAt: new Date().toISOString()
        });   
    }
}

export default PostInteractor;