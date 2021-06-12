
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

moviesResult = [
    {
        "title": "Joker",
        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        "vote_average": 8.8,
        "poster_path": "/images/template2.png",
        "vote_count": 976,
        "popularity": 722.783
    },
    {
        "title": "It Chapter Two",
        "overview": "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
        "vote_average": 7.1,
        "poster_path": "/images/template.png",
        "vote_count": 1306,
        "popularity": 265.852
    },
    {
        "title": "Spider-Man: Far from Home",
        "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
        "vote_average": 7.6,
        "poster_path": "/images/template2.png",
        "vote_count": 4212,
        "popularity": 259.397
    },
    {
        "title": "The Old Man & the Gun",
        "overview": "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
        "vote_average": 6.3,
        "poster_path": "/images/template.png",
        "vote_count": 605,
        "popularity": 155.023
    },
    {
        "title": "Kamen Rider Build NEW WORLD: Kamen Rider Grease",
        "overview": "Deputy Officer of the United Nations Alliance, Simon Marcus, who aims to conquer the world with the terrorist organization Downfall along with the mad scientist Keiji Uraga, attack the Kamen Riders with overwhelming strength. It is only on Kamen Rider Grease that the enemy's abilities did not work. In order to defeat this new enemy and rescue Misora, Kazumi Sawatari must create a new item ... but it is told that it requires the  life of his friends, the Three Crows. The ultimate decision must be made.",
        "vote_average": 0,
        "poster_path": "/images/template2.png",
        "vote_count": 0,
        "popularity": 243.011
    },
    {
        "title": "Rambo: Last Blood",
        "overview": "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
        "vote_average": 6.1,
        "poster_path": "/images/template.png",
        "vote_count": 352,
        "popularity": 146.232
    },
    {
        "title": "Stuber",
        "overview": "After crashing his car, a cop who's recovering from eye surgery recruits an Uber driver to help him catch a heroin dealer. The mismatched pair soon find themselves in for a wild day of stakeouts and shootouts as they encounter the city's seedy side.",
        "vote_average": 6.5,
        "poster_path": "/images/template2.png",
        "vote_count": 122,
        "popularity": 147.97
    },
    {
        "title": "Toy Story 4",
        "overview": "Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called \"Forky\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.",
        "vote_average": 7.6,
        "poster_path": "/images/template.png",
        "vote_count": 2476,
        "popularity": 150.877
    },
    {
        "title": "Fast & Furious Presents: Hobbs & Shaw",
        "overview": "A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.",
        "vote_average": 6.5,
        "poster_path": "/images/template2.png",
        "vote_count": 1399,
        "popularity": 185.034
    },
    {
        "title": "John Wick: Chapter 3 - Parabellum",
        "overview": "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
        "vote_average": 7.1,
        "poster_path": "/images/template.png",
        "vote_count": 2786,
        "popularity": 128.585
    },
    {
        "title": "Aladdin",
        "overview": "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
        "vote_average": 7.1,
        "poster_path": "/images/template.png",
        "vote_count": 3608,
        "popularity": 149.171
    },
    {
        "title": "Gemini Man",
        "overview": "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
        "vote_average": 6,
        "poster_path": "/images/template.png",
        "vote_count": 64,
        "popularity": 140.228
    },
    {
        "title": "Cars",
        "overview": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
        "vote_average": 6.7,
        "poster_path": "/images/template2.png",
        "vote_count": 8166,
        "popularity": 209.583
    },
    {
        "title": "Once Upon a Time... in Hollywood",
        "overview": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        "vote_average": 7.6,
        "poster_path": "/images/template.png",
        "vote_count": 2114,
        "popularity": 109.507
    },
    {
        "title": "Crawl",
        "overview": "While struggling to save her father during a Category 5 hurricane, a young woman finds herself trapped inside a flooding house and fighting for her life against Florida’s most savage and feared predators.",
        "vote_average": 6,
        "poster_path": "/images/template2.png",
        "vote_count": 536,
        "popularity": 106.033
    },
    {
        "title": "Hustlers",
        "overview": "A crew of savvy former strip club employees band together to turn the tables on their Wall Street clients.",
        "vote_average": 6.2,
        "poster_path": "/images/template.png",
        "vote_count": 245,
        "popularity": 105.858
    },
    {
        "title": "The Mystery of the Dragon’s Seal",
        "overview": "The Russian Czar Peter the Great commissions Jonathan Green, an English traveller, to map the Far East territories of the Russian Empire. Green sets off on yet another long journey, full of unbelievable adventures, which eventually leads him to China. On his way, the famous cartographer makes breath-taking discoveries, meets mysterious creatures, Chinese princesses, deadly masters of oriental martial arts, and even Lun Van, the King of Dragons, himself. What could be more perilous than looking into the eyes of Viy? Only meeting him again… What will prevail this time — the unflinching scepticism of the scientist or ancient black magic, which has already gained influence over the Far East Lands?",
        "vote_average": 4.7,
        "poster_path": "/images/template2.png",
        "vote_count": 11,
        "popularity": 92.687
    },
    {
        "title": "Dark Phoenix",
        "overview": "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
        "vote_average": 6.1,
        "poster_path": "/images/template.png",
        "vote_count": 2054,
        "popularity": 98.135
    },
    {
        "title": "Ad Astra",
        "overview": "An astronaut travels to the outer edges of the solar system to find his father and unravel a mystery that threatens the survival of our planet. He uncovers secrets which challenge the nature of human existence and our place in the cosmos.",
        "vote_average": 6.2,
        "poster_path": "/images/template2.png",
        "vote_count": 667,
        "popularity": 91.338
    },
    {
        "title": "Men in Black: International",
        "overview": "The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest, most global threat to date: a mole in the Men in Black organization.",
        "vote_average": 6,
        "poster_path": "/images/template.png",
        "vote_count": 1393,
        "popularity": 94.346
    }
] 
// getMoviesList();
addMovie(moviesResult);

//  function getMoviesList() {
//     fetch('../server/videos.json')
//     .then(response => response.json())
//     .then((res) => {
//         res.results.forEach(element => {
//             moviesResult.push({
//                 title : element.title,
//                 overview : element.overview,
//                 vote_average : element.vote_average,
//                 poster_path : element.poster_path,
//                 vote_count : element.vote_count,
//                 popularity : element.popularity
//             });
//         });
        
//     })
// }

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
   addMovie(filterArray)
}

function showMoreMovies(){
    numberOfResult += 4;
    addMovie(moviesResult);
}