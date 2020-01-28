import React from "react"
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
    top: -2rem;
    left: -2rem;
    height: 4rem;
    width: 4rem;
    background-color: #eee;
`

const FakeCheckbox = ({onChange}) => {
    return (
        <CheckboxContainer>
            <HiddenInput type="checkbox" onChange={onChange}/>
            <CheckboxGraphic />
        </CheckboxContainer>
    )
}

export default FakeCheckbox