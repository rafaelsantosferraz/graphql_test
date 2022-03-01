import { gql } from "apollo-server-core";

export const userMutations = gql`
    extend type Mutation {
        createUser(
            firstName: String!,
            lastName: String!,
            userName: String!,
            password: String!
        ): User!,

        updateUser(
            userId: String!,
            firstName: String,
            lastName: String,
            userName: String
        ): User!,

        updateUserPasswordHash(
            userId: String!,
            password: String
        ): User!,

        deleteUser(
            userId: String!
        ): Boolean!
    }
`;''

export default userMutations;