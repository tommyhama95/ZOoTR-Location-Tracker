import styled from "styled-components";

const Checkbox = item_location => {
    const item = item_location.item
    const name = Object.getOwnPropertyNames(item)
    return (
        <LabelHolder >
            <Input id={name} type="checkbox" />
            <Label htmlFor={name}>
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