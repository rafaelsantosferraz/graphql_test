const posts = async ( args, __, { dataSources }) => {
    console.log(args);
    return dataSources.postAPI.dataLoader.load(args);
}

export const usersObjectTrivialResolvers = {
    UserResult: {
        __resolveType: (obj) => {
            if(typeof obj.userName !== 'undefined') return 'User';
            if(typeof obj.status_code !== 'undefined') return 'UserNotFoundError';
            return null;
        }
    },

    User: {
        posts
    }
};

export default usersObjectTrivialResolvers;
