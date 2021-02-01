import CardList from "../components/CardList"
import OOT_LOCATIONS from "../data/ocarina_locations.json";

const Ocarina = () => {

    return (
        <div>
            <CardList locations={OOT_LOCATIONS}/>
        </div>
    )
}

export default Ocarina;