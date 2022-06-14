const pokemonId = 1;
const data = {
    quote:
        "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
    character: 'Lisa Simpson',
    image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
    characterDirection: 'Right'
}

const pokemonHtml = `<p> ${data.quote} </p>`;
const card = document.querySelector('#simpson');
const cardImg = card.querySelector("#card-img");
const cardName = card.querySelector("#card-name");
const cardCitation = card.querySelector("#card-citation");
const button = card.querySelector("button");

const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;


button.addEventListener("click", (e) => {
    // console.log('refresh card');
    button.classList.toggle('spin__rotate-start');
    console.log(button)
     e.preventDefault;
    fetchPokemonJSON();

})

// This function loads pokemon data from the Pokemon API
function fetchPokemonJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID


    
    axios.get(url)
        .then( (response) =>{
            return response.data; // response.data instead of response.json() with fetch
        })
        .then( (pokemon) =>{
            console.log('data decoded from JSON:', pokemon);

            cardName.querySelector("p").innerHTML = pokemon[0].character;
             cardImg.src=pokemon[0].image;
             console.log(cardCitation)
            cardName.querySelector("blockquote").innerHTML =pokemon[0].quote;
            setTimeout(() => {
                button.classList.toggle('spin__rotate-start');
            }, 250);
           
        });
}



fetchPokemonJSON();