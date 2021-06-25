import { useContext, useState } from "react";
import styled from "styled-components";
import { CounterContext } from "../context/CounterContext";

const Checkbox = (item_location, updateCard) => {
    const name = Object.getOwnPropertyNames(item_location.item);
    const [clicked, setClicked] = useState(false);
    const [statusColor, setStatusColor] = useState(false)
    const context = useContext(CounterContext);
    
    const handleOnClick = () => {
        if(clicked) {
            context.updateCounter(-1)
            item_location.updateCard(false)
            setClicked(false);
            setStatusColor(false)
        } else {
            context.updateCounter(1)
            item_location.updateCard(true)
            setClicked(true);
            setStatusColor(true)

        }
    }
    
    return (
        <LabelHolder>
            <Input id={name} type="checkbox" readOnly={true} checked={clicked} onChange={handleOnClick}/>
            <Label htmlFor={name} readOnly={true} style={{color: statusColor ? "lightgreen" : "white"}}>
                {name}
            </Label>
        </LabelHolder>
    )
}

const LabelHolder = styled.div`
    padding-bottom: 0.8rem;
`;

const Input = styled.input`

`;

const Label = styled.label`

`;

export default Checkbox;