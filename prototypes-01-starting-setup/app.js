
class AgedPerson{
    printAge(){
        console.log(this.age);
        
    }
}

class Person extends AgedPerson{
    name='Max';

    constructor(){//생성자
        //super();
        this.age=30;
    }
    greet = () =>{//메서드
        console.log('Hi'+this.name+'i am'+this.age); 
    }
}
    


/*

function Person(){
    this.age=30;
    this.name='Max';
    this.greet=function(){
        console.log('Hi'+this.name+'i am'+this.age); 
    };
};
Person.prototype={
    printAge(){
        console.log(this.age);//prototype의 this는 메서드를 호출하는 객체를 의미 
    }
}

console.dir(Person);


const p=new Person();//인스턴스화 new는 반환
p.greet();
p.printAge();//폴백 객체에 설정
console.log(p.__proto__); //AgedPerson출력
console.log(p.toString());//[object Object]
const p2=new p.__proto__.constructor();
console.log(Object);//ƒ Object() { [native code] }
*/

const p=new Person();
const p2=new Person();
p.greet();
console.log(p);

const button=document.getElementById('btn');
button.addEventListener('click',p.greet.bind(p));








