
// import './main.scss';

let moviesResult = [];
let numberOfResult = 4;

const movieFilter = document.getElementById("movie-filter");
const movieContainer = document.getElementById('main__movies');
const clearButton = document.getElementById("button-clear");
const moreButton = document.getElementById("button-more");

movieFilter.addEventListener('change', filterByTitle);


document.body.addEventListener('change', (event) =>{
    let target = event.target;
        switch (target.id) {
           case 'sort-title':
            sortByTitle(moviesResult)
            break;
         case 'sort-popularity':
            sortByPopularity(moviesResult)
            break;
        case 'sort-votes':
            sortByVotes(moviesResult)
        break;
        case 'sort-rank':
            sortByRank(moviesResult)
        break;
    }

});

clearButton.addEventListener('click', () => {
    addMovie(moviesResult);
    document.querySelectorAll('input[name="sort"]').forEach((radioButton) => {radioButton.checked = false});
    movieFilter.value = ""
});

moreButton.addEventListener('click', () => {
    showMoreMovies();
});

getMoviesList();

async function getMoviesList() {
    const response = await fetch('http://127.0.0.1:3000/api/videos.json');
    const movies = await response.json();
    movies.results.forEach(element => {
        moviesResult.push({
            title : element.title,
            overview : element.overview,
            vote_average : element.vote_average,
            poster_path : element.poster_path,
            vote_count : element.vote_count,
            popularity : element.popularity
        });
    })
    addMovie(moviesResult)
}
  
function sortByTitle(arrayToSort){
    let sortMoviesByTitle = arrayToSort.slice().sort((a, b) => a.title.localeCompare(b.title))
    addMovie(sortMoviesByTitle);
}

function sortByPopularity(arrayToSort){
    let sortMoviesByPopularity = arrayToSort.slice().sort((a, b) => b.popularity - a.popularity)
    addMovie(sortMoviesByPopularity);
}

function sortByVotes(arrayToSort){
    let sortMoviesByVotes = arrayToSort.slice().sort((a, b) => b.vote_count - a.vote_count)
    addMovie(sortMoviesByVotes);
}

function sortByRank(arrayToSort){
    let sortMoviesByRank =  arrayToSort.slice().sort((a, b) => b.vote_average - a.vote_average)
    addMovie(sortMoviesByRank);
}

function addMovie(resultArray) {
    movieContainer.innerHTML = "";
            for (let i = 0; i < numberOfResult; i++ ){
            const movie = document.createElement("div");
            movie.innerHTML = 
            `<div class="movie">
            <img class="movie__photo" src=..`+ resultArray[i].poster_path +`>
            <div class="movie__desc">
                <div class="movie__desc--title">` + resultArray[i].title +`</div>
                <div class="movie__desc--text">` + resultArray[i].overview +`</div>
                <div class="movie__desc--info">
                    <div class="vote">Vote Count: `+ resultArray[i].vote_count + `</div>
                    <div class="rank">Rank: ` +  Math.round(resultArray[i].vote_average) + `</div>
                    <div class="popularity">Popularity: ` + Math.round(resultArray[i].popularity)  + ` </div>
                </div>
            </div>`
            movieContainer.appendChild(movie);
            }
    
}

function filterByTitle(){
   let filterArray = moviesResult.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(this.value.toLowerCase()) !== -1);
   filterArray.length === 0 ? alert('No results') : addMovie(filterArray)
}

function showMoreMovies(){
    numberOfResult += 4;
    addMovie(moviesResult);
}