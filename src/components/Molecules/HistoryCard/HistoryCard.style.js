import styled from "styled-components";

const HistoryCardStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  margin-bottom: 2.66rem;
  padding: 0 3.3rem;
  font-size: 1.33rem;
  .trip-info {
    display: flex;
    width: 75%;
    justify-content: space-between;
  }
  .rating-btn {
    width: 10%;
    height: 56.75%;
  }
  /* .rating-btn:hover {
    background-color: #580aff;
    color: #fff;
  } */
`;

export default HistoryCardStyle;