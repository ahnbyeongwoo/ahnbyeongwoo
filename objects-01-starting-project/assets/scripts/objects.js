const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];
const renderMovies = (filter = "") => {
  //새로운 영화를 추가할 때 render호출
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = ""; //빈 목록, 렌더링된 모든 항목이 삭제

  if (movies.length === 0) {
    //영화가 없으면
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.includes(filter));

  movies.forEach((movie) => {
    const movieEl = document.createElement("li");
    const {info,...otherProps} =movie;//객체 구조 분해 movie.info를 그냥 info로
    console.log(otherProps);
    //const {title:movieTitle}=info;//info객체의 title 프로퍼티의 값이 저장
    const{getFormattedTitle}=movie;
    
    
    let text = movieTitle.toUpperCase() + " - ";
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`; //사용자가 입력한 키를 페이지에서 내용을 불러옴
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl); //영화를 목록에 추가
  }); //모든 영화에 대해 새로운 요소 즉 새로운 DOM 노드
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value; //DOM노드값만 불러오도록 value를 입력
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-name").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title, //중첩 객체 생성 info객체는 newMovie의 일부
      [extraName]: extraValue //대괄호는 동적 프로퍼티 이름을 할당할 수 있음
    },
    id: Math.random().toString(),
    getFormattedTitle: function(){
        return this.info.title.toUpperCase();
    }
  };
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  //검색 기능 함수
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchMovieHandler.addEventListener("click", searchMovieHandler);
