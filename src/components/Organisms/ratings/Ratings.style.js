import styled from "styled-components";

const RatingsStyle = styled.div`
//   width: 100vw;
  min-height: 100vh;
  padding-top: 2rem;
  font-size: 0.8rem;

    
    .rate-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        // text-align: center;
        h1 {
            color: #1A1A1A;
            font-size: 24px;
            line-height: 29px;
            
        }
        p {
            // width: 37rem;
            // margin: auto;
            margin: 1.7rem 0;
            font-size: 1.2rem;
            text-align: center;
            weight: 500;
            color: rgba(0, 0, 0, 0.24);
        }
        .rate {
            // margin: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;   
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

export default RatingsStyle;
