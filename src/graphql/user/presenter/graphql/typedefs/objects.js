import { gql } from "apollo-server-core";

export const userObjects = gql`
    type User {
        id: String!,
        firstName: String!,
        lastName: String!,
        userName: String!
        passwordHash: String!
        indexRef: Int!,
        createdAt: String!,
        posts: [Post] 
    },

    union UserResult = User | UserNotFoundError,

    type UserNotFoundError {
        status_code: Int!
        message: String!
    },
`;''


export default userObjects;