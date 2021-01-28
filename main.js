const cardsContainer = document.querySelector(".location-container");
const globalCounter = document.querySelector(".total-tracked");

async function getLocations() {
    fetch("./locations.json")
        .then(result => result.json())
        .then(data => {
            displayLocationCards(data.locations);
        });
}

function displayLocationCards(locations) {
    locations.map(area => displayArea(area));

}

function displayArea(area) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    
    let cardInnerContainer;
    let cardName;
    let locationName;
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
        locationName = `${cardName}-${createForName(name)}`;

        const label = document.createElement("label");
        label.innerText = Object.getOwnPropertyNames(area[i])[0];
        label.setAttribute("class", "location-label");
        label.setAttribute("for", locationName);

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "location-checkbox");
        checkbox.setAttribute("id", locationName);
        
        const locationHolder = document.createElement("div");
        locationHolder.appendChild(checkbox);
        locationHolder.appendChild(label);
        locationHolder.setAttribute("class", "label-holder");

        locationHolder.addEventListener("change", (e) => {
            const sibling = e.target.nextSibling;
            e.target.checked ? sibling.classList.add("checked") : sibling.classList.remove("checked");
            const allBoxes = document.querySelectorAll(".location-checkbox");
            let counter = 0;
            for(let n = 0; n < allBoxes.length; n++) {
                counter += allBoxes[n].checked ? 1 : 0;
            }
            globalCounter.innerText = `${counter}/${allBoxes.length}`; 
        })
        
        cardInnerContainer.appendChild(locationHolder);
    }
    cardsContainer.appendChild(card);
}

function createForName(locationName) {
    const words = locationName.split(" ");
    const abbreviation = words.map(word => {
        if(parseInt(word)) {
            return word;
        }
        return word.match(/[A-Z]/)    
    });
    return abbreviation.join("")
}




getLocations();