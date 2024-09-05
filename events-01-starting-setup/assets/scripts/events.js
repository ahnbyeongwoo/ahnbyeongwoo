const button = document.querySelector("button");

//button.onclick = function(){//onclick은 프로퍼티와 동일하게 자바스크립트에서 실행

//};

const buttonClickHandler = (evnet) => {
  //이벤트에 트리거될 함수
  event.target.disabled = true;
  console.log(event); //버튼 한번만 클릭 비활성화
};

const anotherButtonClickHandler = () => {
  console.log("This was clicked!");
};

//button.onclick= buttonClickHandler;
//button.onclick=anotherButtonClickHandler;//기존 리스너를 오버라이딩
const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click',buttonClickHandler);

// setTimeout(() => {//2초뒤 이벤트 리스너가 삭제
//     button.removeEventListener('click',buttonClickHandler);
// },2000);

// buttons.forEach(btn => {
//     btn.addEventListener('click',buttonClickHandler);
// })

// window.addEventListener('scroll',event => {//스크롤할때마다 이벤트 발생
//     console.log(event);
// });

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); //메서드의 사용 없이는 브라우저가 적용했을때 기본 동작을 방지
  console.log(event);
});

const div=document.querySelector('div');//HTML의 div 태그를 추가

div.addEventListener('mouseenter', event => {
    console.log('CLICKED DIV');
    console.log(event);
})

button.addEventListener('mouseenter', event => {
  event.stopPropagation();//모든 이벤트 리스너를 실행
    console.log('CLICKED BUTTON');
    console.log(event);
});

const listItems=document.querySelectorAll('li');
const list=document.querySelector('ul');

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');//토글 이벤트
//   });
// });

list.addEventListener('click', event => {
  console.log(event.currentTarget);//전체 ul에 해당, list요소를 참조
  event.target.classList.toggle('highlight');//하나의 이벤트 리스너로 작동하는 토글 이벤트
});