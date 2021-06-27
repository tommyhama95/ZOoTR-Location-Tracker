import styled from "styled-components";
import Card from "./Card";

const CardList = (location_data) => {
    const { locations } = location_data.locations; 

    return (
        <Container>
            {
                locations.map( (area, index) => 
                    <Card 
                        key={index} 
                        location={area}
                    />
                )
            }
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 3rem;
    height: calc(100vh - 6rem);
    width: 100%;
    overflow-y: scroll;

    @media (max-width: 1500px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        height: calc(100vh - 6rem);
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        height: calc(100vh - 6rem);
    }
    @media (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        height: calc(100vh - 8rem);
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
    }

`;

export default CardList;