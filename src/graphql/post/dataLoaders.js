import DataLoader from 'dataloader';

const makePostDataloader = (getPosts) => {
    return new DataLoader(async (args) => {
        const ids = args.map((x) => x.id);
        var query = '?userId=' + ids.join('&userId=');
        const posts = await getPosts(query);
        const postMap = {};
        posts.forEach(post => {
            postMap[post.userId] = null ?? [];
            postMap[post.userId].push(post);
        });
        return ids.map((id) => postMap[id]);  
    })
};

export default makePostDataloader;

