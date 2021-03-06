import { useState } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const Card = (area) => {
    const [checked, setChecked] = useState(0);
    const location = area.location;
    const cardTitle = Object.getOwnPropertyNames(location[0]);

    const updateCard = (status) => {
        status ? setChecked(checked+1) : setChecked(checked-1);
    }

    const status = checked === location.length-1;

    return (
        <StyledCard bgColor={status} >
            <CardTitle  textColor={status}>{cardTitle} {checked}/{location.length -1}</CardTitle>
            <CardContent>
                {
                    location.map( (item_location, index) => {
                            if(index !== 0) {
                                return <Checkbox 
                                    key={index} 
                                    item={item_location} 
                                    updateCard={updateCard}
                                    cardLevel={cardTitle}
                                />
                            }
                            return <div display={"none"} key={index}></div>;
                        }
                    )
                }
            </CardContent>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    display: relative;
    justify-self: center;
    border: solid 3px rgb(27, 160, 184);
    border-radius: 7px;
    
    width: 70%;
    min-width: 10%;
    background-color: ${props => props.bgColor ? "darkgreen" : "rgb(6, 74, 114)"};
    margin: 2%;
    padding: 0.2rem 1rem;
`;

const CardTitle = styled.h2`
    margin-top: 1rem;
    color: ${props => props.textColor ? "lightgreen" : "white"}
`;

const CardContent = styled.div`

`;

export default Card;