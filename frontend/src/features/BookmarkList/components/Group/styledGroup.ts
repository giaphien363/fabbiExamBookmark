import { Button, Card, CardTitle } from "reactstrap";
import styled, { keyframes } from "styled-components";

export const animationInput = keyframes`
  0% { width: 0%; }
  25% { width: 25%; }
  50% { width: 50%; }
  75% { width: 75%; }
  100% { width: 100%; }
`;

export const StyledCard = styled(Card)`
  margin: 1rem 0rem;
  line-height: 2.3rem;
`;

export const StyledCardTitle = styled(CardTitle)`
  font-weight: bolder;
  margin: 0.3rem;
  margin-left : 1rem;
`;

export const StyledCardTitleInput = styled.input`
  width: 100%;
  border: none;
  padding: 0 0.7rem;
  border-bottom: 2px outset blue;
  &:focus {
    outline: none;
  }
  animation: ${animationInput} 0.4s 0s both;
`;

export const StyledDropdownButton = styled(Button)`
  margin: 0rem 1rem;
  border-color: transparent;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: aliceblue;
  color: steelblue;
`;

export const StyledCardBody = styled.div`
  height: 14rem;
  scroll-behavior: smooth;
  overflow-y: scroll;
`;

export const StyledCardFooter = styled(Button)`
  border-color: transparent;
  text-align: center;
  background-color: aliceblue;
  color: steelblue;
`;