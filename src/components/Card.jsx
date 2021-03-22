import styled from "styled-components"
import Checkbox from "./Checkbox"

const Card = area => {
    const location = area.location
    const cardTitle = Object.getOwnPropertyNames(location[0])

    return (
        <StyledCard>
            <CardTitle>{cardTitle}</CardTitle>
            <CardContent>
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
            </CardContent>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    display: relative;
    justify-self: center;
    border: solid 3px rgb(27, 160, 184);
    border-radius: 7px;
    height: 100%;
    width: 70%;
    min-width: 10%;
    background-color: rgb(6, 74, 114);
    margin: 2%;
    padding: 0.2rem 1rem;
`;

const CardTitle = styled.h2`
    margin-top: 1rem;
`;

const CardContent = styled.div`
    
`;

export default Card;