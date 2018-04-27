
const url = "https://api.tvmaze.com/shows";

const FetchUsers = () => {
  return fetch(url)
    .then(response => {
      return response.json()
    })
    .then(responseJson => {
      return (responseJson);
        
    })
}

export { FetchUsers };