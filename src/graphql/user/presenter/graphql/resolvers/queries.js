import UserInteractor from "../../../domain/interactors/user_interactor";


const user = async (_, { id }, { dataSources }) => {
    return dataSources.userAPI.getUser(id, true);
}

const users = async (_, __, { dataSources }) => {
    return dataSources.userAPI.getUsers();
}

export const usersQueriesResolvers = {
    Query: {
        user, 
        users,
    }
};

export default usersQueriesResolvers;
