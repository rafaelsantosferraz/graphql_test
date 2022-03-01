export class User {
    
    constructor(id, firstName, lastName, userName, passwordHash, indexRef, createdAt){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.passwordHash = passwordHash;
        this.indexRef = indexRef;
        this.createdAt = createdAt;
    }

    toMap(){
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            userName: this.userName,
            passwordHash: this.passwordHash,
            indexRef: this.indexRef,
            createdAt: this.createdAt
        };
    }
}