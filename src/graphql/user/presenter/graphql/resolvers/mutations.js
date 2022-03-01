import UserInteractor from "../../../domain/interactors/user_interactor";

export const createUser = async (_, args, { dataSources } ) => {
    const userInteractor = new UserInteractor(dataSources.userAPI);
    return userInteractor.createUser(args);
}

export const updateUser = async (_, args, { dataSources } ) => {
    const userInteractor = new UserInteractor(dataSources.userAPI);
    return userInteractor.updateUser(args);
}

export const updateUserPasswordHash = async (_, args, { dataSources } ) => {
    const userInteractor = new UserInteractor(dataSources.userAPI);
    return userInteractor.updatePassword(args);
}

export const deleteUser = async (_, args, { dataSources } ) => {
    const userInteractor = new UserInteractor(dataSources.userAPI);
    return userInteractor.deleteUser(args);
}

export const userMutationsResolvers = {
    Mutation: { createUser, updateUser, deleteUser, updateUserPasswordHash },
}

export default userMutationsResolvers;