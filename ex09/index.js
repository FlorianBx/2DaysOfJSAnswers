const listOfUsers = [];

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const datas = await response.json();
  return datas;
}

const getUsers = async () => {
  const users = await fetchUsers();
  users.map((user) => listOfUsers.push(user.name));
}

const displayUsers = async () => {
  await getUsers();
  console.log(listOfUsers);
}

displayUsers();
