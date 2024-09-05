const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((succes) => {
      resolve(succes);
      },(error) => {
        reject(error);
      },opts);
  });
  return promise;
};
const setTimer = (duration) => {
  //프로미스
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  }); //내장 API를 프로미스화
  return promise;
};



function trackUserHandler() {
  let positionData;
  getPosition()
  .then(posData => {
   positionData=posData;
   return setTimer(2000);
  })
  .catch(err => {
    console.log(err);
    return 'on we go...';
  })
  .then(data => {//프로미스 체이닝은 단계벼 수행
    console.log(data,positionData);
  });
  // setTimer(1000).then(() => {
  //   console.log("Timer done!");
  // });
  // console.log("Getting position..."); //즉시 위치 정보를 얻을 수 있다해도 이 문자열이 먼저 출력
}

button.addEventListener("click", trackUserHandler);

// let result = 0;

// for(let i=0; i< 10000000; i++){
//   result += i;
// }
// console.log(result);
