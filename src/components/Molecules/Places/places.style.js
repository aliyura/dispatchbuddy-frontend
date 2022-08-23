import styled from "styled-components";

const PlaceStyle = styled.div`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  padding: 0 2em;
  h1 {
    width: 100%;
  }
  .location-search-input {
    line-height: 2rem;
    padding: 0;
    font-size: 1rem;
  }
  .form-style{
    input{
      padding: 0.5rem 0.7rem;
      margin-bottom: 0.7rem;
    }
    // border: 1px solid red;
  }
  .btn-submit{
    cursor: pointer;
  }
`;

export default PlaceStyle;
