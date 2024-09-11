const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  //const promise = new Promise((resolve, reject) => {
  // const xhr = new XMLHttpRequest();

  // xhr.open(method, url); //첫번째 인자로 전달해서 open으로 GET 요청보냄, 두번째 인자는 요청을 보낼 URL을 붙여넣기

  // xhr.responseType = "json";

  // xhr.onload = function () {
  //   //const listOfPosts=JSON.stringify(xhr.response);//stringify는 자바스크립트 코드나 객체, 배열을 JSON 데이터로 변환 / parse는 JSON 데이터를 자바스크립트로 다시 변환
  //   resolve(xhr.response);
  // }; // onload는 이벤트 리스너를 추가하는 방법

  // xhr.onerror=function(){//오류 처리 함수
  //     console.log(xhr.response);

  // }

  // xhr.send(JSON.stringify(data)); //요청을 전송하려면 send()호출
  //}); //HTTP 요청 프로미스화
  //return promise;
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers:{//요청 헤더 추가
        'Content-Type': 'application/json'//서버에게 이 요청이 JSON 데이터가 있다고 전해줌
    }
  }).then((response) => {
    return response.json(); //fetch API가 해당 response 본문을 파싱하고 이를 JSON에서 자바스크립트 객체와 배열로 변환하는 작업
  }); //url이 fetch의 문자열, GET 요청이 전송
}

async function fetchPosts() {
  //try{
  const responseData = await sendHttpRequest(
    //responseData에서 응답을 기다림
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );

  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    postEl.querySelector("li").id = post.id; //모든 list item 요소에 id가 할당
    listElement.append(postEl);
  }
  // } catch(error){
  //     alert(error.message);
  // }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post); //세번째 인자 post는 JSON으로 변환되어 나가는 요청에 첨부
}
fetchButton.addEventListener("click", fetchPosts); //패칭 버튼
createPost("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent); //enterTitle과 Content 요청
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id; //delete 버튼을 클릭한 게시물의 id를 알려줌
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    ); //API는 id가 URL의 속하길 바래서 경로 끝에 추가
    //delete 요청이 전송되어 URL로 삭제 요청이 보내짐
  } //버튼을 클릭할때만 삭제
});
