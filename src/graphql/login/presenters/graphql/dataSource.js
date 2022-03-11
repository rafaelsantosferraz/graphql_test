const { RESTDataSource } = require('apollo-datasource-rest');

export class LoginAPI extends RESTDataSource {
  constructor(BASE_URL) {
    super();
    this.baseURL = BASE_URL + '/users';
  }

  async getUserByUserName(username) {
    return this.get('?userName=' + username, {}, {
      timeout:1000,
      compress: true,
    });
  }

  async updateUserPasswordHash(userUpdates){
    console.log( userUpdates.id);
    return this.patch('/' + userUpdates.id, userUpdates);
  }
}

export default LoginAPI;
