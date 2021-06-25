
import { useContext } from "react";
import { useLocation } from "react-router"
import styled from "styled-components";
import { CounterContext } from "../context/CounterContext";
const Header = () => {
    const games = ["ocarina", "majora", "past", "skyward", "twilight"];
    const location = useLocation();
    const pathname = location.pathname.substring(1, location.pathname.length);

    const context = useContext(CounterContext);

    let name;
    switch(pathname) {
        case games[0]: name = "Ocarina of Time - Location Tracker"; break;
        case games[1]: name = "Majoras Mask - Location Tracker"; break;
        case games[2]: name = "A Link to the Past - Location Tracker"; break;
        case games[3]: name = "Skyward Sword - Location Tracker"; break;
        case games[4]: name = "Twilight Princess - Location Tracker"; break;
        default: name = "Randomizer tracker"; break;
    }


    return (
        <StyledHeader>
            <StyledH1>{name} for Ocarina of Time</StyledH1>
            <Counter>Checked: {context.checkedAmount}</Counter> 
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
`;

const StyledH1 = styled.h1`

`;

const Counter = styled.h1`

`;


export default Header;