const uid = Symbol("uid"); //Library land
console.log(uid);

const user = {
  //id: 'p1',
  [uid]: "p1",
  name: "Max", //동적 프로퍼티 ID 구문을 사용
  age: 30,
  [Symbol.toStringTag]: "User Object", //태그를 값으로 정의
};
//라이브러리를 사용하는 app land
user[uid] = "p3";

user.id = "p2";

console.log(user[Symbol("uid")]);
console.log(Symbol("uid") === Symbol("uid"));
console.log(user.toString());

const company = {
  curEmployee: 0,
  employees: ["Max", "Manu", "Anna"],
  next() {
    //next 메서드에서 객체를 반환
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true }; //루핑 완료 시 신호 true
    }
    const returnValue = {
      value: this.employees[this.curEmployee],
      done: false,
    }; //done 프로퍼티는 출력할 값이 더 남아있는지 불리언으로 신호 보냄
    this.curEmployee++;
    return returnValue;
  },
    [Symbol.iterator]: function* employeeGenerator() {
    //제너레이터 함수에 루핑 논리를 입력
    // let employee = company.next();

    // while (!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployee = 0;
    while(currentEmployee < this.employees.length){
        yield this.employees[currentEmployee];//while안에는 console.log대신 yield 키워드, 반환과 비슷
        currentEmployee++;
    }
  },
};

// let employee = company.next();
// while(!employee.done){
//     console.log(employee.value);
//     employee = company.next();
// }

for (const employee of company) {
  console.log(employee);
}
// const it= company.getEmployee();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


const course = {
  title: 'JavaScript- The Complete Guide',

}; 
Reflect.setPrototypeOf(course,{toString() {return this.title;}
});//setPrototypeOf는 course 객체의 프로토타입을 설정

console.log(course.toString());

const courseHandler = {
  get(obj,propertyName){
    console.log(propertyName);
    return obj[propertyName];//차단하지 않고 값 검색 요청을 전달
    
  }
};

const pCourse = new Proxy(course, courseHandler);//기존 객체를 다른 객체로 래핑
console.log(pCourse.title);
console.log(course, pCourse);


