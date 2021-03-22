import styled from "styled-components";
import Card from "./Card";

const CardList = location_data => {
    const { locations } = location_data.locations; 

    return (
        <Container >
            {
                locations.map( (area, index) => 
                    <Card key={index} location={area} />
                )
            }
        </Container>
    )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3rem;
  height: 100%;
  width: 100%;

`;

export default CardList;