const content = document.querySelector('.content');
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const input = document.querySelector('.field');

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
    title.innerHTML = element.title;
    image.src =  `${IMGPATH + poster_path}`

    vote.innerHTML = element.vote_average;
    
    card.classList.add('card');

    
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(vote);

   
    content.appendChild(card)


   
   });
})


input.addEventListener('change', (e) => {
   console.log(e.target.value) 
})

