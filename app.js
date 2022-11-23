const content = document.querySelector('.content');
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const input = document.querySelector('.field');
const searchMovie = 'https://api.themoviedb.org/3/search/movie?api_key=f760b56a99389fed4fd9321739168a40&language=en-US&page=1&include_adult=false';


async function getMovies(){
fetch('https://api.themoviedb.org/3/movie/popular?api_key=f760b56a99389fed4fd9321739168a40&language=en-US&page=1')

.then(function(response){
 return response.json() 
})

.then(function(data){
 console.log(data.results);

 data.results.forEach(element => {

    const { poster_path, vote_average, overview } = element
    const card = document.createElement('div');
    const title = document.createElement('h1');
    const image = document.createElement('img');
    const vote = document.createElement('h2');

    console.log(element.id);
    title.innerHTML = element.title;
    image.src =  `${IMGPATH + poster_path}`

    vote.innerHTML = element.vote_average;
    
    card.classList.add('card');


    
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(vote);

   
    content.appendChild(card);


    if(element.vote_average < 6.4){
     vote.classList.add('red');
    }

   else if(element.vote_average < 6.9){
    vote.classList.add('yellow');
   }

  else {
  vote.classList.add('green');
   
  }

    

    

   
   });
})

}









input.addEventListener('input', (e) => {
 
})



window.onload = function(){
 getMovies();
}
