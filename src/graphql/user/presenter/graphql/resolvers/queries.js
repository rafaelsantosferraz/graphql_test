import { AuthenticationError } from "apollo-server-core";
import UserInteractor from "../../../domain/interactors/user_interactor";


const user = async (_, { id }, { dataSources }) => {
    return dataSources.userAPI.getUser(id, true);
}

const users = async (_, __, { dataSources, isAuthorize }) => {
    if( !isAuthorize ) throw new AuthenticationError('Access denied');
    return dataSources.userAPI.getUsers();
}

export const usersQueriesResolvers = {
    Query: {
        user, 
        users,
    }
};

export default usersQueriesResolvers;
