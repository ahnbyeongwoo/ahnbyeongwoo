//객체지향
class Validator {
  static REQUIRED = "REQUIRED";
  static MIN_LENGTH = "MIN_LENGTH";

  static validate(value, flag, validatorValue) {
    //value는 확인하는 값,flag는 유효성 검사를 식별,validatorValue는 유효성 검사를 구성
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      //재사용할 수 있는 validate 함수
      return value.trim().length > validatorValue;
    }
  }
}
class User {//사용자의 모습을 정의
    constructor(uName, uPassword){
        this.userName=uName;
        this.password= uPassword;
    }
    greet(){
        console.log('Hi i am' + this.userName);
        
    }
}

class UserInputForm {
  constructor() {
    this.form = document.getElementById("user-input"); //폼 자체 추가
    this.UserNameInput = document.getElementById("username");
    this.passwordInput = document.getElementById("password");

    this.form.addEventListener("submint", this.signupHandler.bind(this)); //bind은 signup과 동일한 것을 가리킴
  }

  signupHandler(evnet) {
    event.preventDefault();
    const enterUserName = this.UserNameInput.value;
    const enteredPassword = this.passwordInput.value;

    if (//true를 반환하지 않은 경우는 느낌표
      !Validator.validate(enteredUserName, Validator.REQUIRED) ||
      !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)
    ) {
      alert('Invalid input- username or password is wrong');
      return;
    };
    const newUser=new User(enterUserName, enteredPassword);
    console.log(newUser);
    newUser.greet();
  }
}


const uINputForm = new UserInputForm();