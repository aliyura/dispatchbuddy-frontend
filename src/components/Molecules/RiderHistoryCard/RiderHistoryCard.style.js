import styled from "styled-components";

const RiderHistoryCardStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  margin-bottom: 2.66rem;
  padding: 0 3.3rem;
  font-size: 1.33rem;
  .rider-info {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .rider-info_left {
    display: flex;
    width: 50%;
    justify-content: flex-start;
  }
  .rider-info_details {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }
  .rider-info_img {
    border-radius: 50%;
    border-style: none;
    background-size: contain;
    background-position: center;
    
  }
  .rider-info_image {
    object-fit: contain;
  }
  .rider-info_right {
    display: flex;
    flex-direction: column;
  }
`;

export default RiderHistoryCardStyle;