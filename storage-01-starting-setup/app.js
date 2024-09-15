const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

let db;

const dbRequest = indexedDB.open("StorageDummy", 1); //첫번째 인자는 데이터베이스 이름을 전달, 두번째 인자는 버전 숫자

dbRequest.onupgradeneeded = function (event) {
  const db = event.target.result;

  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = function (event) {
    const productsStore = db
      .transaction("products", "readwrite")
      .objStore("products"); //객체 저장소 이름, 저장소 접근할 때 사용하는 모드
    productsStore.add({
      id: "p1",
      title: "A First Product",
      price: 12.99,
      tags: ["Expensive", "Luxury"],
    });
  };
};

dbRequest.onerror = function (event) {
  console.log("ERROR!");
};

storeBtn.addEventListener("click", () => {
    if(!db){
        return;
    }
    const productsStore = db
    .transaction("products", "readwrite")
    .objStore("products"); //객체 저장소 이름, 저장소 접근할 때 사용하는 모드
  productsStore.add({
    id: "p2",
    title: "A Second Product",
    price: 122.99,
    tags: ["Expensive", "Luxury"],
  });
});

retrBtn.addEventListener("click", () => {
    const productsStore = db
    .transaction("products", "readwrite")
    .objStore("products");
});
