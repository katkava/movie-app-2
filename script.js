//Nav 

const openBtn = document.querySelector('.open-btn')
const nav = document.querySelectorAll('.nav')
const closeBtn = document.querySelector('.close-btn').addEventListener('click', closeNav)

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==13)
  {
    closeNav()
  }
  })  


openBtn.addEventListener('click', () => {
  nav.forEach(nav_el => nav_el.classList.add('visible'))
})

function closeNav() {
  nav.forEach(nav_el => nav_el.classList.remove('visible'))
}




//Fetch requests for movie page

const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=57aa7054725294868e3483070415317b&page=1"

const IMG_PATH = "https://image.tmdb.org/t/p/w500"

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=57aa7054725294868e3483070415317b&query="'



const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.getElementById("main")
//Get initial movies

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ''
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie

    const movieEl = document.createElement('div')
    
    movieEl.classList.add('movie')

    movieEl.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="movie-info">
        <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}

</div>    
`
main.appendChild(movieEl)

  })
}

function getClassByRate(vote) {
  if(vote >= 8) {
    return "green"
  }else if(vote >= 5) {
    return "orange"
  }else {
    return "red"
  }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value 

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_URL + searchTerm)

        search.value = ''
    }else {
        window.location.reload()
    }
})

