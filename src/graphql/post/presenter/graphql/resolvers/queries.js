const post = async (_, { id }, { dataSources }) => {
    return dataSources.postApi.getPost(id);      
}

const posts = async (_, __, { dataSources }) => {
    return dataSources.postAPI.getPosts();
}

export const postQueriesResolvers = {
    Query: { post, posts }
}

export default postQueriesResolvers;