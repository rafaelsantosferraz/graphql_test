const { RESTDataSource } = require('apollo-datasource-rest');
import makePostDataloader from "./dataloaders";


export class PostAPI extends RESTDataSource {
  constructor(BASE_URL) {
    super();
    this.baseURL = BASE_URL + '/posts';
    this.dataLoader = makePostDataloader(this.getPosts.bind(this));
  }

  async getPost(id, isCache) {
    return this.get(`/${id}`, {},  {
      cacheOptions: {
        ttl: isCache ? 60 : 0
      },
      timeout: 1000
    });    
  }

  async getPosts(query = '') {
    return this.get(query, {}, {
      cacheOptions: {
        ttl: 60
      },
      timeout: 1000
    });    
  }

  async addPost(post){
    return this.post('', post);  
  }

  async updatePost(post){
    return this.patch(`/${post.id}`, post);  
  }
}

export default PostAPI;

