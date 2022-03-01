const user = async (post, _, { dataSources }) => {
    return dataSources.userAPI.dataLoader.load(post.userId);
}

export const postObjectsTrivialResolvers = {
    Post: { user }
}

export default postObjectsTrivialResolvers;