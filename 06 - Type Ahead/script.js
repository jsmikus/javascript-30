const endpoint = "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json";
const countries = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => countries.push(...data));

function findMatches(wordToMatch, countries) {
    return countries.filter(place => {
        const regex = new RegExp(wordToMatch, "gi");
        return place.country.match(regex)
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchArray = findMatches(this.value, countries);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, "gi");
        const countryName = place.country.replace(regex, `<span class="hl">${this.value.toLowerCase()}</span>`);
        if (place.population === null) {
            place.population = "unknown";
        }
        return `
        <li>
            <span class="name">${countryName}</span>
            <span class="name">${numberWithCommas(place.population)}</span>
        </li>
        `
    }).join("");
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);