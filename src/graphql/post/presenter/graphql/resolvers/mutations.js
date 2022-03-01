import { PostInteractor } from "../../../domain/interactors/post_interactor";

const createPost = async (_, args, { dataSources }) => {
    const postInteractor = new PostInteractor(dataSources.postAPI, dataSources.userAPI);
    return await postInteractor.createPost(args);   
}

const updatePost = async (_, args, { dataSources }) => {
    const postInteractor = new PostInteractor(dataSources.postAPI, dataSources.userAPI);
    return await postInteractor.updatePost(args);   
}

export const postMutationsResolvers = {
    Mutation: { createPost, updatePost },
}

export default postMutationsResolvers;