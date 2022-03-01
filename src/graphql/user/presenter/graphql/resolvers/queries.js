import UserInteractor from "../../../domain/interactors/user_interactor";


const user = async (_, { id }, { dataSources }) => {
    return dataSources.userAPI.getUser(id, true);
}

const users = async (_, __, { dataSources }) => {
    return dataSources.userAPI.getUsers();
}

const login = async (_, args, { dataSources }) => {
    const userInteractor = new UserInteractor(dataSources.userAPI);
    return userInteractor.login(args);
}

export const usersQueriesResolvers = {
    Query: {
        user, 
        users,
        login,
    }
};

export default usersQueriesResolvers;
