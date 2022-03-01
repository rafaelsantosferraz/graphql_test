import { ValidationError } from "apollo-server-core";

export class Post {
    constructor(id, title, body, userId, indexRef, createdAt){
        this.id = id,
        this.title = title,
        this.body = body,
        this.userId = userId,
        this.indexRef = indexRef,
        this.createdAt = createdAt,
        this.isValid()
        
    }


    isValid() {
        this.#titleValidation();
        this.#bodyValidation();
        return true;
    }

    #titleValidation(){
        const title = this.title;
        if(title.length  > 2){
            return true;
        } else if(title.length == 0) {
            throw new ValidationError(`Post title is empty`);
        } else {
            throw new ValidationError(`Post title: ${title}, is too small`);
        }
    }

    #bodyValidation(){
        const body = this.body;
        if(body.length  > 10){
            return true;
        } else if(body.length == 0) {
            throw new ValidationError(`Post body is empty`);
        } else {
            throw new ValidationError(`Post body: ${body}, is too small`);
        }
    }


}