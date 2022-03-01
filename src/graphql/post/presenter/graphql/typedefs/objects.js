import { gql } from "apollo-server-core"

export const postObjects = gql`
    type Post {
        id: String!,
        title: String!,
        body: String!,
        user: User!,
        indexRef: Int!,
        createdAt: String!
    }
`;

export default postObjects;
