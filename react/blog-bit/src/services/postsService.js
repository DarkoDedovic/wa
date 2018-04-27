import { Post } from '../entities/Post'


let url = "https://jsonplaceholder.typicode.com/posts";
class UserService {
  fetchPosts = () => {
    return fetch(url)
      .then(response => {
        return response.json()
      })
      .then(responseJson => {
        return responseJson.map((post) => new Post(post.userId, post.id, post.title, post.body));

      })

  }


  fetchPostById = (id) => {
    return fetch(`${url}/${id}`)
      .then(response => response.json())
      .then(post => new Post(post.userId, post.id, post.title, post.body))

  }
}
export const userService = new UserService;