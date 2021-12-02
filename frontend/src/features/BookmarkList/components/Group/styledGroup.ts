import styled from 'styled-components'
import { Button, Card, CardTitle, Col, ListGroup, Row, UncontrolledButtonDropdown} from 'reactstrap';


export const StyledCard  = styled(Card)`
    width: 25rem;
    margin: 1rem 1rem;
    line-height: 2.3rem;
    align-self: center;

 
`;

export const StyledCardTitle = styled(CardTitle)`
    font-weight: bolder ;
    margin : 0.3rem;
`;
 export const StyledDropdownButton = styled(Button)`
    margin: 0rem 1rem;
    border-color: transparent;
 `

export const StyledCardHeader = styled(Col)`
    display: flex;
    justify-content: space-between;
    background-color: aliceblue	;
    color : black;
    
`

export const StyledCardBody = styled.div`
    height: 14rem;
    scroll-behavior: smooth;
    overflow-y : scroll;
`

export const StyledCardFooter = styled(Button)`
    color: midnightblue;
    border-color: transparent;
    text-align: center;
    background-color: mintcream;
& :hover{
    color : green;
}
`

export const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family:  Roboto, sans-serif;
`