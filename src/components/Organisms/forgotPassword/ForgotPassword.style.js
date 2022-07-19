import styled from "styled-components";

const ForgotPasswordStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e5e5e5;
  padding-top: 2rem;
  font-size: 0.8rem;
  .wrapper {
    width: 52%;
    background-color: #fff;
    margin: auto;
    padding: 4rem 0;

    h1 {
      width: 44%;
      margin: auto;
      font-size: 1.13rem;
    }
    h2 {
      width: 44%;
      margin: auto;
      font-size: 0.50rem; 
    }
    #bottom {
      text-align: center;
      a {
        color: #580aff;
        font-weight: 700;
      }
    }
    @media (max-width: 500px) {
      width: 80%;
      h1 {
        width: 80%;
      }
    }
  }
`;

export default ForgotPasswordStyle;
