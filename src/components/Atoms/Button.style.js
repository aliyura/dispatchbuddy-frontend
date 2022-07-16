import styled from "styled-components"

const Button = styled.button`
  width: 100%;
  background: ${(props) => (props.outlined ? " #FFFFFF" : "#580AFF")};
  color: ${(props) => (props.outlined ? "#580AFF" : "#FFFFFF")};
  border-radius: ${(props) => (props.outlined ? ".5rem" : "0")};
  border-color: #580aff;
  border-style: solid;
  padding: 0.8rem;
`;

export default Button;