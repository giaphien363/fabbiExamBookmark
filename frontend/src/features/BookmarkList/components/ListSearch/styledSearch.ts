import {Button, Col} from "reactstrap";
import styled from "styled-components"

export const StyledLoader = styled.div`

`

export const StyledLink = styled.a`
    text-decoration: none;
    line-height: 2.3rem;
    color: steelblue;
    font-weight: bold;
`
export const StyledButton = styled(Button)`
  border-radius: 100%;
  border-color: transparent;
  margin: 0rem 0.1rem;
  padding: 0.25rem 0.5rem;
`

export const StyledButtons = styled.div`
  display: flex;
`

export const StyledSearch = styled(Col)`
    background-color: aliceblue;
    margin : 1.5rem 1rem;
    width : 50%;
    display: flex;
    justify-content: space-between;
    margin-left: 25%;
`