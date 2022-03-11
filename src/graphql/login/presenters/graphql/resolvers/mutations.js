import LoginInteractor from "../../../domain/interactors/login_interactor";

export const updateUserPasswordHash = async (_, args, { dataSources } ) => {
    const loginInteractor = new LoginInteractor(dataSources.loginAPI);
    return loginInteractor.updatePassword(args);
}

export const loginMutationsResolvers = {
    Mutation: { updateUserPasswordHash },
}

export default loginMutationsResolvers;