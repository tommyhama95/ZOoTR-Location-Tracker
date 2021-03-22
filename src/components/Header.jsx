
import { useLocation } from "react-router"
import styled from "styled-components";
const Header = () => {
    const games = ["ocarina", "majora", "awakening", "skyward"];
    const location = useLocation();
    const pathname = location.pathname.substring(1, location.pathname.length);

    let name;
    switch(pathname) {
        case "ocarina": name = "Ocarina of Time - Location Tracker"; break;
        default: name = "Welcome to Zelda-Tracker"; break;
    }


    return(
        <StyledHeader>
            <StyledH1>{name}</StyledH1>
            <Counter >0/258</Counter>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledH1 = styled.h1`

`;

const Counter = styled.h2`
    display: relative;
`;



export default Header;