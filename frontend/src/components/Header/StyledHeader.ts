import { Button, Container, Input, InputGroup, Row } from "reactstrap";
import styled from "styled-components";

export const StyledHeader = styled(Container)`
    margin-bottom: 30px;

`

export const StyledHeaderTitle = styled(Row)`
    font-family: serif;
    height: 120px;
    text-align: center;
    align-content: center;
`

export const StyledAddButton = styled(Button)`
    background-color: steelblue;
    color: snow;
    
    &:hover{
        background-color: green;
    }
`

export const StyledInput = styled(InputGroup)`
    margin-left: 220%;
`