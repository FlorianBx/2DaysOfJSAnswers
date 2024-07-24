const age = 30;

if (age >= 18) {
  console.log("You are an adult ");
} else {
  console.log("You are not an adult");
}

switch (age) {
  case 18:
    console.log("You are 18");
    break;
  case 20:
    console.log("You are 20");
    break;
  default:
    console.log("You are not 18 or 20");
}
