import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #d9d9d9;
  width: 100%;
  padding: 0.8rem;
  margin-top: 0.5rem;
  ::placeholder {
    color: #c4c4c4;
  }
  ::-ms-input-placeholder {
    color: #c4c4c4;
  }
  ::-webkit-input-placeholder {
    color: #c4c4c4;
  }
  :-moz-placeholder {
    color: #c4c4c4;
  }
  
`;
export default Input