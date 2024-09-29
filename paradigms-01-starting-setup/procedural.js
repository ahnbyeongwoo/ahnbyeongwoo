//절차지향 프로그래밍
const form = document.getElementById("user-input");

function signupHandler(event) {
  event.preventDefault(); //페이지 새로고침x
  const userNameInput = document.getElementById("username");
  const enterUsername = userNameInput.value;


  const passwordInput = document.getElementById("password");
  const enteredPassword = passwordInput.value; //단계별 실행

  if (enteredUsername.trim().length === 0) {
    alert("Invalid input- username must not be empty!");
    return;
  }
  if (enteredPassword.trim().length <= 5) {
    alert("Invalid input- password must six characters or longer!");
    return;
  }
  const user = {
    userName: enterUsername,
    password: enteredPassword
  };
  console.log(user);
  console.log("Hi i am" + user.userName);
}

form.addEventListener("submit", signupHandler);
