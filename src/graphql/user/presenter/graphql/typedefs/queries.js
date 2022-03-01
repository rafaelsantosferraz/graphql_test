import { gql } from "apollo-server-core";

export const userQueries = gql`
    extend type Query {
        user(id: String!): User!,
        users: [UserResult!],
        login(username: String!, password: String!): String!
    },
`;''


export default userQueries;