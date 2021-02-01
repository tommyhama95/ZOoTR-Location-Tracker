import Checkbox from "./Checkbox"

const Card = area => {
    const location = area.location
    const cardTitle = Object.getOwnPropertyNames(location[0])

    return (
        <div className="card">
            <h2 className="card-title">{cardTitle}</h2>
            <div className="card-content">
                {
                    location.map( (item_location, index) => {
                            if(index !== 0) {
                                return <Checkbox 
                                    key={index} 
                                    item={item_location} 
                                />
                            }
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Card;