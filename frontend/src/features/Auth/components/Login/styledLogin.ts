import styled from 'styled-components'
import {Container, Label, Input} from 'reactstrap'

export const StyledContainer = styled(Container)`
    overflow: hidden;
    width: 35rem;
    padding: 2rem ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

export const StyledLabel = styled(Label)`
    display: flex;
    justify-content: flex-start;
`

export const StyledInput = styled(Input)`
    background-color: transparent;
    border-color: transparent;
    border-bottom: 1.5px solid lightgray;
`
export const StyledForgot = styled.a`
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: flex-end;
`
export const StyledButton = styled.button`
    background-color: steelblue;
    border-color: transparent;
    color: snow;
    border-radius: 1rem;
    margin: 2rem 0rem;
    height: 2rem;

`
