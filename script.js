const searchBox = document.querySelector(".searchBox");
const searchButton = document.querySelector(".searchButton");
const cardBox = document.querySelector("#cardBox");

const fetchCards = (info) => {
    const promises = [];
    cardBox.innerHTML = "Fetching Pokemons...";
    const url = `https://pokeapi.co/api/v2/pokemon/${info}`;
    promises.push(fetch(url).then((res) => res.json()));

    Promise.all(promises).then((results) => {
    let pokemonData = "";
        results.map((values)=>{
            pokemonData = `
            <div class="card">
                <h1 class="title">${values.name}</h1>
                <img src=${values.sprites['front_default']} alt="" class="images">
                <p>Type - ${values.types[0].type['name']}</p>
                <p class="power">Ability 1 - ${values.abilities[0].ability['name']}</p>
                <p class="power">Ability 2 - ${values.abilities[1].ability['name']}</p>
            </div>
            `
            cardBox.innerHTML = pokemonData;
        });
        console.log(results);
    });
}

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchCards(searchInput);
});