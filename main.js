let locations;

async function getLocations() {
    fetch("./locations.json")
        .then(result => result.json())
        .then(data => {
            locations = data.locations;
            console.log(locations)
            displayLocationCards(data.locations)
        });
}

function displayLocationCards(arr) {
    for(let location of arr) {
        if(Object.getOwnPropertyNames(location)[0].includes("Boss ")) {
            console.log(true)
        }
    }
}


getLocations();