import { Col, Row} from "reactstrap";
import styled from "styled-components";


export const StyledHeader = styled(Row)`
  background-color: steelblue;
  height: 3rem;
  position: fixed;
  z-index: 999;
  width: 101%;
  margin-top : -5rem;
`
export const StyledColLeft = styled(Col)`
  display: inline-flex;
`

export const StyledColRight = styled(Col)`
  display: inline-flex;
  justify-content: flex-end;
`


export const StyledLink = styled.p`
  text-decoration: none;
  color: white;
  cursor: pointer;
  margin : 10px 20px;
`
