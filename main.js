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
    
    let cardInnerContainer;
    let cardName;
    let locatName;
    for(let i = 0; i < area.length; i++) {
        const name = Object.getOwnPropertyNames(area[i])[0];
        
        if(i === 0) { // AKA Title for the area
            cardName = name.split(" ")[0];
            const cardTitle = document.createElement("h2");
            cardTitle.setAttribute("class", "card-title");
            cardTitle.innerText = name;
            card.appendChild(cardTitle);
            
            cardInnerContainer = document.createElement("div");
            cardInnerContainer.setAttribute("class", "card-container");
            card.appendChild(cardInnerContainer);
            continue;
        }

        locatName = `${cardName}-${createForName(name)}`;
        console.log(locatName)
        
        const label = document.createElement("label");
        label.innerText = Object.getOwnPropertyNames(area[i])[0];
        label.setAttribute("class", "location-label");
        label.setAttribute("for", locatName);

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "location-checkbox");
        checkbox.setAttribute("id", locatName)
        
        const locationHolder = document.createElement("div");
        locationHolder.appendChild(checkbox);
        locationHolder.appendChild(label);
        locationHolder.setAttribute("class", "label-holder")
        
        cardInnerContainer.appendChild(locationHolder);
    }
    cardContainer.appendChild(card);
}

function createForName(locationName) {
    const words = locationName.split(" ");
    const abbreviation = words.map(word => word.match(/[A-Z]/));
    return abbreviation.join("")
}


getLocations();