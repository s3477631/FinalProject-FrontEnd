import styled from "styled-components"
import BorderedDiv from "./BorderedDiv"

export const FloaterStatsGrid = styled.div`
    border-style: solid;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: fixed;
    bottom: 0;
    background-color: white;
    width: 100%;
    left: 0;
`

export const FloatHeader = styled.h1`
    text-align: center;
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
`

export const ProjectedTimeCell = styled(StatCell)`
    background-color: ${({projectedIsPastGoal}) => projectedIsPastGoal ? "red" : "green"};
`
export default FloaterStatsGrid