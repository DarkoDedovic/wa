
const url = "https://randomuser.me/api/?results=15";

const FetchUsers = () => fetch(url)
  .then(response => response.json())
  .then(usersJson => usersJson);

export { FetchUsers };