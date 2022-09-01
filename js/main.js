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
    </div>
</div> */}

function createListOfMovies(movie){

    
    
    let colEL = document.createElement('div');
    colEL.className = "col-4";
    
    // card element
    let cardEl = document.createElement('div');
    cardEl.className = "card myCard";

    // card element's header
    let  cardHeaderEl = document.createElement('div');
    cardHeaderEl.className = "card-header";
    
    let cardTitleEl = document.createElement('h4');
    cardTitleEl.textContent = movie.title;


    // card element's body
    let cardBodyEl = document.createElement('div');
    cardBodyEl.className = "card-body" ;
    cardBodyEl.textContent = movie.description;


    // SO now we are creating right DOM elements

    // <col> parent
    // <div class="card">
    colEL.appendChild(cardEl);
    // <div class="card-header">
    cardEl.appendChild(cardHeaderEl);
    // <h4>Title</h4>
    cardHeaderEl.appendChild(cardTitleEl);
    // <div class="card-body">lorem</div>
    cardEl.appendChild(cardBodyEl);
    
    
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
    // console.log(siteNameEl);
}
function siteName(){
    let siteNameEl = document.createElement('h1');
    siteNameEl.className = "col-12 text-center";
    siteNameEl.textContent = "Film Rendering site";
    siteNameEl.setAttribute("style", 'position:absolute; top:0px; left:0px')
        
    siteContainer.appendChild(siteNameEl);
}

// siteName();
renderMoviesAll(movies);
