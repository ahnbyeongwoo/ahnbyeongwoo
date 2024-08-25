const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button"); //html의 button을 접근
const backdrop = document.getElementById("backdrop"); //html의 div id인 backdrop 참조
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive"); //cancel버튼
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

const movies = []; //입력한 영화 배열로 저장

const updateUI = () => {
  //화면 하단에 순서 없는 목록인 ui에 추가
  if (movies.length === 0) {
    //영화가 추가할때마다 실행
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const deleteMovie = movieId => {
    let movieIndex = 0;
    for (const movie of movies) {
      if (movie.id === movieId) {
        break;
      }
      movieIndex++;
    }
    movies.splice(movieIndex,1);//배열 내에서 해당 인덱스를 가진 요소를 제거하고 한 칸 앞으로 이동
    const listRoot = document.getElementById("movie-list");
    listRoot.children[movieIndex].remove();
};

const deleteMovieHandler = movieId => {
    const deleteMovieModal=document.getElementById('delete-modal');
    deleteMovieModal.classList.add('visible');
    togglebackdrop();
  //deleteMovie(movieId);
};

function renderNewMovieElement(id, title, imageUrl, rating) {
  const newMovieElement = document.createElement("li"); //빈 목록 생성
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    </div>
    `; //영화 요소의 innerHTML 작성
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id)); //영화 삭제 함수, bind은 실행된 함수에서 받게 될 인자를 미리구성
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
}

const togglebackdrop = () => {
  backdrop.classList.toggle("visible");
};


const toggleMovieModal = () => {
  //function과 같은 함수방법
  addMovieModal.classList.toggle("visible");
  togglebackdrop(); //ADD MOVIE버튼을 누를때마다 온오프기능
};

const clearMovieInput = () => {
  //영화 추가 후 add눌러도 타이핑이 남아있는걸 삭제하는 함수
  for (const usrInput of userInputs) {
    usrInput.value = ""; //빈 문자열로 저장
  }
};

const cancelAddMovie = () => {
  //cancel버튼 기능
  toggleMovieModal();
};

const addMovieHandler = () => {
  //입력 요소를 선택하여 목록으로 선택
  const titleValue = userInputs[0].value; //0번 인덱스는 title 요소
  const imageUrlValue = userInputs[1].value; //1번 인덱스는 image-url
  const ratingValue = userInputs[2].value; //2번 인덱스는 rating
  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5 //입력값 확인 trim은 시작 및 끝에 있는 불필요한 공백을 제거
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }
  const newMovies = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovies);
  console.log(movies);
  toggleMovieModal(); //영화 추가하면 창 닫기
  clearMovieInput();
  renderNewMovieElement(
    newMovies.id,
    newMovies.title,
    newMovies.image,
    newMovies.rating
  );
  updateUI();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie); //cancel버튼 기능
confirmAddMovieButton.addEventListener("click", addMovieHandler);
