import styled from "styled-components"
import BorderedDiv from "./BorderedDiv"

export const FloaterStatsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr;
    position: fixed;
    bottom: 0;
    background-color: white;
    width: 100%;
    left: 0;
`

export const FloatHeader = styled.h1`
    text-align: center;
    font-size: 1.5rem;
`

export const FloatStatHeader = styled.h4`
    text-align: center;
    margin: 0 0 0.5rem 0;
    padding: 0;
`

export const BreaksList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
`

export const StatCell = styled(BorderedDiv)`
    padding: 0.5rem;
    text-align: center;
    border-width: 5px;
`

export const ProjectedTimeCell = styled(StatCell)`
    background-color: ${({projectedIsPastGoal}) => projectedIsPastGoal ? "red" : "green"};
    border-top: ${({projectedIsPastGoal}) => projectedIsPastGoal && "none"};
`

export const WarningCell = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    border-style: solid;
    border-width: 5px;
    border-bottom: none;
    background-color: red;
    text-align: center;
    padding: 0.5rem;
`

export default FloaterStatsGrid