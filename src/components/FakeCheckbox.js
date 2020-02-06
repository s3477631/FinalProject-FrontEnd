import React, { useState } from "react"
import styled from "styled-components"

const CheckboxContainer = styled.label`
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

const HiddenInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`

const CheckboxGraphic = styled.span`
    position: absolute;
    top: -1rem;
    left: -1rem;
    height: 4rem;
    width: 4rem;
    background-color: ${props => props.checked ? "green" : "#eee"};
    &:after {
        content: "";
        position: absolute;
        display: ${props => props.checked ? "block" : "none"};
        left: 1.4rem;
        top: 0.5rem;
        width: 1rem;
        height: 2rem;
        border: solid white;
        border-width: 0 5px 5px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    border-radius: 0.5rem;
`



const FakeCheckbox = ({onChange}) => {
    const [ checked, setChecked ] = useState(null)
    const onCheck = event => {
        const isChecked = event.target.checked
        setChecked(isChecked)
        onChange(event)
    }
    return (
        <CheckboxContainer>
            <HiddenInput type="checkbox" onChange={onCheck}/>
            <CheckboxGraphic checked={checked}/>
        </CheckboxContainer>
    )
}

export default FakeCheckbox