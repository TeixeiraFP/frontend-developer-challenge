const isName = document.querySelector("#input-name");
const isEmail = document.querySelector("#input-email");
const isCpf = document.querySelector("#input-cpf");

//submission event registration form
document
  .querySelector(".btn-registration")
  .addEventListener("click", (event) => {
    event.preventDefault();
    isValidName(isName.value);
    isValidEmail(isEmail.value);
    console.log(isCpf.value);
  });

const isEmailFriend = document.querySelector("#input-friend-email");
const isNameFriend = document.querySelector("#input-friend-name");
//friend registration submission event
document
  .querySelector(".btn-register-friende")
  .addEventListener("click", (event) => {
    event.preventDefault();
    isValidName(isNameFriend.value);
    isValidEmail(isEmailFriend.value);
  });

// validation functions
function isValidName(name) {
  const validate = name.split(" ");

  if (validate.length >= 2) return name;
  else throw new Error("Prenche com nome e sobrenome");
}

function isValidEmail(email) {
  if (email.indexOf("@" && ".com") > 0) return email;
  else throw new Error("Email inválido");
}

function isvalidCPF(cpf) {
  const validate = cpf.split("");
  const number = parseInt(cpf);

  if (number === "Number")
    throw new Error("CPF inválido! Deve conter apenas números");
  else if (validate.length <= 9 && validate.length > 10)
    throw new Error("CPF inválido!");
  //   else console.log(cpf);

  console.log(parseInt(cpf));
  console.log(validate);
}
