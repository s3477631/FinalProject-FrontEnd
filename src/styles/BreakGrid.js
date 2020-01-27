import styled from "styled-components"

const BreakGrid = styled.div`
    border-style: solid;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    border-color: ${({started}) => started ? "blue" : "black"};
`

export default BreakGrid