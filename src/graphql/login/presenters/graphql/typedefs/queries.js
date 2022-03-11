import { gql } from "apollo-server-core";

export const userQueries = gql`
    extend type Query {
        login(username: String!, password: String!): String!
    },
`;''


export default userQueries;