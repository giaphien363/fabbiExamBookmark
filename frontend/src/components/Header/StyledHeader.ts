import { Col, Row} from "reactstrap";
import styled from "styled-components";


export const StyledHeader = styled(Row)`
  background-color: steelblue;
  height: 3rem;
  margin-bottom: 2.5rem;
`;

export const StyledColRight = styled(Col)`
  display: inline-flex;
  justify-content: flex-end;
`

export const StyledColLeft = styled(Col)`
  display: inline-flex;

`

export const StyledLink = styled.p`
  text-decoration: none;
  color: white;
  cursor: pointer;
  margin : 10px 20px;
`
