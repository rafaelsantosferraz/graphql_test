import { gql } from "apollo-server-core"

export const postMutations = gql`
    extend type Mutation {
        createPost(
            title: String!,
            body: String!,
            userId: Int!
        ): Post!,
        updatePost(
            postId: String!
            title: String,
            body: String
        ): Post!
    }
`;

export default postMutations;