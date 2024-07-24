const listOfUsers = [];

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const datas = await response.json();
  return datas;
}

const getUsers = async () => {
  const users = await fetchUsers();
  users.map((user) => listOfUsers.push(
    {
      name: user.name,
      salary: Math.floor(Math.random() * 10000)
    }
  ));
}

const getUsersWithBizEmails = async () => {
  const users = await fetchUsers();
  const usersWithBizEmails = users.filter(user => user.email.endsWith('.biz'));
  console.log(`${usersWithBizEmails.length} users have a .biz email: ${usersWithBizEmails.map(user => user.name).join(', ')}`);
  return usersWithBizEmails;
}

const getAverageSalary = async () => {
  const users = await fetchUsers();
  const totalSalary = listOfUsers.reduce((accumulator, user) => accumulator + user.salary, 0);
  console.log(`The average salary is : ${totalSalary / users.length}`);
}

const displayUsers = async () => {
  await getUsers();
  await getUsersWithBizEmails();
  await getAverageSalary();
  console.log(listOfUsers);
}

displayUsers();
