
import { useLocation } from "react-router"
const Header = () => {
    const games = ["ocarina", "majora", "awakening", "skyward"];
    const location = useLocation();
    const pathname = location.pathname.substring(1, location.pathname.length);

    let name;
    switch(pathname) {
        case "ocarina": name = "Ocarina of Time"; break;
        default: name = "Welcome to Zelda-Tracker"; break;
    }


    return(
        <header>
            <h1>{name} Location Tracker</h1>
            <h2 className="total-tracked">0/258</h2>
        </header>
    );
}

export default Header;