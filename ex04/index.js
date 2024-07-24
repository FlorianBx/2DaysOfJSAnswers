const myName = "florian"

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet(myName));


const bye = name => "Bye!" + ' ' + name;
console.log(bye(myName));


const helloBye = name => {
  console.log(`${greet(name)} ${bye(name)}...`);
}
helloBye(myName);
