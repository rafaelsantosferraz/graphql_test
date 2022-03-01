import { gql } from "apollo-server-core"

export const postQueries = gql`
    extend type Query {
        post(id: Int): Post!,
        posts: [Post!]!
    }
`;

export default postQueries;