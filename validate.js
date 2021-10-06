const inputName = $("#input-name");
const inputEmail = $("#input-email");
const inputCpf = $("#input-cpf");

//validate first forms
$(".btn-registration").on("click", (e) => {
  e.preventDefault();
  try {
    isValidName(inputName.val());
    isValidEmail(inputEmail.val());
    isvalidCPF(inputCpf.val());
  } catch (err) {
    console.log(err);
  }
  console.log("evento ok");
});

//validate second forms
$(".btn-register-friende").on("click", (e) => {
  e.preventDefault();
  try {
    isValidName(inputName.val());
    isValidEmail(inputEmail.val());
  } catch (err) {
    console.log(err);
  }
  console.log("evento ok");
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

// function isvalidCPF(cpf) {
//   const validate = cpf.split("");
//   const number = parseInt(cpf);

//   if (number === "Number")
//     throw new Error("CPF inválido! Deve conter apenas números");
//   else if (validate.length <= 9 && validate.length > 10)
//     throw new Error("CPF inválido!");
//   //   else console.log(cpf);

//   console.log(parseInt(cpf));
//   console.log(validate);
// }
