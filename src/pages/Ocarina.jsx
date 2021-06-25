import React, { useContext } from "react";
import styled from "styled-components";
import CardList from "../components/CardList";
import { CounterContext } from "../context/CounterContext";


const Ocarina = () => {
    const context = useContext(CounterContext);
    

    return (
        <PageContainer>
            <CardList locations={context.getOcarinaLocations()} />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    position: relative;

`;

const Counter = styled.h2`
    display: relative;
`;


export default Ocarina;