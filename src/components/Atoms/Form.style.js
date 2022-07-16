import styled from "styled-components";

const Form = styled.form`
  width: 44%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  p {
    align-self: flex-start;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`;

export default Form;
