const { RESTDataSource } = require('apollo-datasource-rest');
const { default: makeUserDataloader } = require('./dataloaders');

export class UserAPI extends RESTDataSource {
  constructor(BASE_URL) {
    super();
    this.baseURL = BASE_URL + '/users';
    this.dataLoader = makeUserDataloader(this.getUsers.bind(this));
  }

  async getUser(id, isCache) {
    return this.get('/' + id, {}, {
      cacheOptions: {
        ttl: isCache ? 60 : 0
      },
      timeout:1000,
      compress: true,
    });
  }

  async getUserByUserName(username) {
    return this.get('?userName=' + username, {}, {
      timeout:1000,
      compress: true,
    });
  }

  async getUsers(query = '', URLSearchParams) {
    return this.get(query, URLSearchParams, {
        cacheOptions: {
            ttl: 60,
        },
        timeout: 1000,
        compress: true,
    });
  }

  async addUser(user){
    return this.post('', user);
  }

  async updateUser(userUpdates){
    return this.patch('/' + userUpdates.id, userUpdates);
  }

  async updateUserPasswordHash(userUpdates){
    console.log( userUpdates.id);
    return this.patch('/' + userUpdates.id, userUpdates);
  }

  async deleteUser(userId){
    try{
      console.log(userId);
      await this.delete('/' + userId);
      return true;
    } catch {
      return false;
    }
  }
}

export default UserAPI;
