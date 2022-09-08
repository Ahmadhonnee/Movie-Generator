var listEl = document.querySelector(".moviesList");
var siteContainer = document.querySelector(".container");

{/* <div class="col-4">
    <div class="card">
        <div class="card-header">
            <h4>Title</h4>
        </div>
        <div class="card-body">
            lorem
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
        </ul>
    </div>
</div> */}

function createListOfMovies(movie){

    
    
    let colEL = document.createElement('div');
    colEL.className = "col-4";
    
    // card element
    let cardEl = document.createElement('div');
    cardEl.className = "card myCard myBg";

    let cardImgEl = document.createElement('img');
    cardImgEl.className = "card-img-top"
    cardImgEl.setAttribute("src", movie.imageUrl)
    cardImgEl.setAttribute("srcset", movie.imageUrl, "https://picsum.photos/200/400")
    cardImgEl.setAttribute("alt", "Here shoul be Image of movie")

    // card element's header
    // let  cardHeaderEl = document.createElement('div');
    // cardHeaderEl.className = "card-header";
    
    // let cardTitleEl = document.createElement('h4');
    // cardTitleEl.textContent = movie.title;


    // card element's body
    // let cardBodyEl = document.createElement('div');
    // cardBodyEl.className = "card-body" ;
    // cardBodyEl.textContent = movie.description;

    // card elements' list
    let cardListEl = document.createElement('ul');
    cardListEl.className = "list-group list-group-flush myBg";

    // cardListEl ' s li 1
    let cardListItemEl1 = document.createElement('li');
    cardListItemEl1.className = "list-group-item myBg";

    // cardListEl ' s li 2
    let cardListItemEl2 = document.createElement('li');
    cardListItemEl2.className = "list-group-item myBg";

    // cardListEl ' s li 3
    let cardListItemEl3 = document.createElement('li');
    cardListItemEl3.className = "list-group-item myBg";

    // cardListEl ' s li 4
    let cardListItemEl4 = document.createElement('li');
    cardListItemEl4.className = "list-group-item myBg";

    // cardListEl ' s li 5
    let cardListItemEl5 = document.createElement('li');
    cardListItemEl5.className = "list-group-item myBg";

    // cardListEl ' s li 6
    let cardListItemEl6 = document.createElement('li');
    cardListItemEl6.className = "list-group-item myBg";

    // cardListEl ' s li 7
    let cardListItemEl7 = document.createElement('li');
    cardListItemEl7.className = "list-group-item myBg";


    

    // SO now we are creating right DOM elements

    // <col> parent
    // <div class="card">
    colEL.appendChild(cardEl);
    // <img class="card-img-top"></img>
    cardEl.appendChild(cardImgEl);
    // <div class="card-header">
    // cardEl.appendChild(cardHeaderEl);
    // <h4>Title</h4>
    // cardHeaderEl.appendChild(cardTitleEl);
    // <div class="card-body">lorem</div>
    // cardEl.appendChild(cardBodyEl);
    // <ul class="list-group list-group-flush">
    cardEl.appendChild(cardListEl);
    // <li class="list-group-item">An item</li>
    cardListEl.appendChild(cardListItemEl1);
    // <li class="list-group-item">An item</li>
    cardListEl.appendChild(cardListItemEl2);
    // <li class="list-group-item">An item</li>
    cardListEl.appendChild(cardListItemEl3);
    // <li class="list-group-item">An item</li>
    cardListEl.appendChild(cardListItemEl4);
    // <li class="list-group-item">An item</li>
    cardListEl.appendChild(cardListItemEl5);
    // <li class="list-group-item">An item</li>
    cardListEl.appendChild(cardListItemEl6);
    // <li class="list-group-item">An item</li>
    cardListEl.appendChild(cardListItemEl7);


    cardListItemEl1.textContent = movie.id;
    cardListItemEl2.textContent = movie.title;
    cardListItemEl3.textContent = `Realise date: ${movie.year}`;
    cardListItemEl4.textContent = `Genres: ${movie.genres}`;
    cardListItemEl5.textContent = `Directors: ${movie.director}`;
    cardListItemEl6.textContent = `Actors: ${movie.actors}`;
    cardListItemEl7.textContent = movie.description;
    


    
    // Here it returns 
    // <div class="col-4">
    //     <div class="card">
    //         <div class="card-header">
    //             <h4>Title</h4>
    //         </div>
    //         <div class="card-body">
    //             lorem
    //         </div>
    //     </div>
    // </div>
    return colEL;
}

function renderMoviesAll(movies){
    listEl.innerHTML = null;
    
    for(let i = 0; i < movies.length; i++){
        let oneMovieEl = createListOfMovies(movies[i]);
        listEl.appendChild(oneMovieEl);
    }
}



renderMoviesAll(movies);
