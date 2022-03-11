import LoginInteractor from "../../../domain/interactors/login_interactor";

const login = async (_, args, { dataSources }) => {
    const loginInteractor = new LoginInteractor(dataSources.loginAPI);
    return loginInteractor.login(args);
}

export const loginsQueriesResolvers = {
    Query: {
        login,
    }
};

export default loginsQueriesResolvers;
