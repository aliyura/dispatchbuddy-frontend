import styled from "styled-components";

const HomepageStyle = styled.main`
  width: 100%;
  h3 {
    color: #580aff;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.13rem;
    line-height: 1.88rem;
  }
  .intro {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
    .text {
      width: 50%;
      h3 {
        font-size: 4.13rem;
      }
    }
    .image-container {
      width: 40%;
      position: relative;
      .shadow {
        height: 86%;
        width: 94%;
        box-shadow: 8px 8px 0 5px rgba(88, 10, 255, 0.3);
        position: absolute;
        bottom: 0.01rem;
        right: 0.01rem;
      }
    }
  }
  .search-riders {
    .text {
      text-align: center;
      h4 {
        color: rgba(0, 0, 0, 0.24);
      }
      h3 {
        font-size: 2.5rem;
      }
      p {
        width: 30rem;
        margin: auto;
        margin-bottom: 1.5rem;
        weight: 500;
      }
    }
    .locator {
      width: 100%;
      background-color: rgba(16, 24, 40, 0.05);
      padding: 1.5rem 0;
      border-radius: 1.5rem;
      /* .locator-input {
        border-radius: 0.25rem;
      } */
    }
  }
`;

export default HomepageStyle;