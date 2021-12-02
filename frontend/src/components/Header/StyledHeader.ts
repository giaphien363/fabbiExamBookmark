import { Button, Navbar, Row } from "reactstrap";
import styled from "styled-components";

export const StyledHeader = styled(Row)`
    /* font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; */
    /* font-family: cursive; */
    font-family: serif;
    margin-bottom : 50px;
    height: 100px;
    text-align: center;
    align-content: center;
`;

export const StyledAddButton = styled(Button)`
    background-color: cornflowerblue;
    float: right;
    margin-top: -50px;

    &:hover{
        background-color: lightseagreen;
    }
`