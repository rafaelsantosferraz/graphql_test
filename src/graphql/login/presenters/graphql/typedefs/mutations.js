import { gql } from "apollo-server-core";

export const userMutations = gql`
    extend type Mutation {
        updateUserPasswordHash(
            userId: String!,
            password: String
        ): User!
    }
`;''

export default userMutations;