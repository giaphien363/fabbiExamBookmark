import { Container, Input, Label } from 'reactstrap'
import styled from 'styled-components'

export const StyledLoader = styled.div`
    width : 100%;
    height: 100vh;
    display : flex;
    justify-content: center;
    padding : 3rem;
    position: absolute;
    top : 0;
    left : 0;
    align-items : center;
    background : #8080808c;
`

export const StyledContainer = styled(Container)`
    overflow: hidden;
    width: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 5rem;
    padding-bottom: 3rem;
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
    width: 100%;

`

export const StyledWith = styled.div`
    display: flex;
    justify-content: space-around;
    padding : 0.1rem;
`
export const StyledButtonFb = styled.button`
    line-height: 0px;
    overflow: hidden; 
    border-color:transparent;
`

export const StyledIconFb = styled.i`
    font-size: 18px;
    margin-top: 0.2rem;
    margin-right: 0.8rem;
    margin-left:-0.8rem;
`
export const StyledTextFb = styled.p`
  margin-top: 0.9rem;
  font-family: roboto, sans-serif;
  font-weight: lighter; 
  margin-right: -0.8rem;
`