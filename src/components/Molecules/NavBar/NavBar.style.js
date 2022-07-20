import styled from "styled-components";

const NavBarStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 11.88rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 5;
  overflow: hidden;
  .navbar-right {
    width: 40%;
  }
  .navbar-right {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default NavBarStyle;
