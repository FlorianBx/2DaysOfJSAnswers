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

const getUsersWithBizEmails = async () => {
  const users = await fetchUsers();
  const usersWithBizEmails = users.filter(user => user.email.endsWith('.biz'));
  console.log(`${usersWithBizEmails.length} users have a .biz email: ${usersWithBizEmails.map(user => user.name).join(', ')}`);
  return usersWithBizEmails;
}

const displayUsers = async () => {
  await getUsers();
  await getUsersWithBizEmails();
  console.log(listOfUsers);
}

displayUsers();
