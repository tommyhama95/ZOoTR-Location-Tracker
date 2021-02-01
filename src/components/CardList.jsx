import Card from "./Card";

const CardList = location_data => {
    const { locations } = location_data.locations; 

    return (
        <div className="cardlist-container">
            {
                locations.map( (area, index) => 
                    <Card key={index} location={area} />
                )
            }
        </div>
    )
}

export default CardList;