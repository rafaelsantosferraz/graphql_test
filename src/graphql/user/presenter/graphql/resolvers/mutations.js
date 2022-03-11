import { AuthenticationError } from "apollo-server-core";
import UserInteractor from "../../../domain/interactors/user_interactor";

export const createUser = async (_, args, { dataSources } ) => {
    const userInteractor = new UserInteractor(dataSources.userAPI);
    return userInteractor.createUser(args);
}

export const updateUser = async (_, args, { dataSources, isAuthorize, userId} ) => {
    if(!isAuthorize || userId != args.userId) throw new AuthenticationError('Access denied');
    const userInteractor = new UserInteractor(dataSources.userAPI);
    return userInteractor.updateUser(args);
}

export const deleteUser = async (_, args, { dataSources } ) => {
    const userInteractor = new UserInteractor(dataSources.userAPI);
    return userInteractor.deleteUser(args);
}

export const userMutationsResolvers = {
    Mutation: { createUser, updateUser, deleteUser },
}

export default userMutationsResolvers;  