import DataLoader from 'dataloader';

const makeUserDataloader = (getUsers) => {
    return new DataLoader(async (ids) => {
        var query = '?id=' + ids.join('&id=');
        const users = await getUsers(query);
        return ids.map((id) => users.find((user) => user.id == id));  
    })
};

export default makeUserDataloader;

