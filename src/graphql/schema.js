import userTypeDefs from "./user/typedefs";
import userResolvers from "./user/resolvers";
import postTypeDefs from "./post/typedefs";
import postResolvers from "./post/resolvers";
import PostAPI from "./post/dataSource";
import UserAPI from "./user/dataSource";

import loginTypeDefs from "./login/presenters/graphql/typedefs";
import loginResolvers from "./login/presenters/graphql/resolvers";
import LoginAPI from "./login/presenters/graphql/dataSource";



import { gql } from "apollo-server-core";

const rootTypeDefs = gql`
    type Query {
        root: String
    },

    type Mutation {
        root: String
    },
`;

const rootResolver = {
    Query: {
        root: () => {return "root";}
    }
};

export const context = () => {
    const BASE_URL = process.env.BASE_URL;
    return {
        baseUrl: BASE_URL,
    }
};

export const dataSources = () => {
    const BASE_URL = process.env.BASE_URL;
    return {
        postAPI: new PostAPI(BASE_URL),
        userAPI: new UserAPI(BASE_URL),
        loginAPI: new LoginAPI(BASE_URL),
    }
};

export const typeDefs  = [rootTypeDefs, userTypeDefs, postTypeDefs, loginTypeDefs];
export const resolvers = [rootResolver, userResolvers, postResolvers, loginResolvers];

