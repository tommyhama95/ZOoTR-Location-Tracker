const cardContainer = document.querySelector(".location-container");

async function getLocations() {
    fetch("./locations.json")
        .then(result => result.json())
        .then(data => {
            console.log(data.locations)
            displayLocationCards(data.locations)
        });
}

function displayLocationCards(locations) {
    locations.map(area => displayArea(area))
}

function displayArea(area) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    
    for(let i = 0; i < area.length; i++) {
        const name = Object.getOwnPropertyNames(area[i])[0];
        if(i === 0) { // AKA Title for the area
            const cardTitle = document.createElement("div");
            cardTitle.setAttribute("class", "card-title");
            cardTitle.innerText = name;
            card.appendChild(cardTitle);
            continue;
        }


    }

    cardContainer.appendChild(card);
}


getLocations();