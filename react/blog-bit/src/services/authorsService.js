import { Authors } from '../entities/Authors'

let authorsUrl = "https://jsonplaceholder.typicode.com/users";

class AuthorService {

  fetchAuthors = () => {
    return fetch(authorsUrl)
      .then(response => {
        return response.json()
      })
      .then(responseJson => {
        console.log(responseJson)
        return responseJson.map(author => new Authors(author.id, author.name, author.username, author.email, author.address, author.phone, author.website, author.company));
      })
  }

  fetchAuthorById = (id) => {
    return fetch(`${authorsUrl}${id}`)
      .then(response => response.json())
      .then(author => new Authors(author.id, author.name, author.username, author.email, author.address, author.phone, author.website, author.company));

  }
}


export const authorService = new AuthorService();


