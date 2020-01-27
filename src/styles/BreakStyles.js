import styled from "styled-components"

const BreakGrid = styled.div`
    border-style: solid;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    border-color: ${({started}) => started ? "blue" : "black"};
`

export const BreakHeader = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    margin-left: 0.5rem;
`

export const ScheduledTime = styled.div`
    text-align: right;
    margin: auto 0;
    margin-right: 0.5rem;
`

export const CenteredCell = styled.div`
    text-align: center;
    margin: auto;
`

export default BreakGrid