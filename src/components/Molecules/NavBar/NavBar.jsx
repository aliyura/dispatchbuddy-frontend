import React from "react";
import { Logo } from "../../Atoms";
import NavText from "../../Atoms/NavText";
import NavBarStyle from "./NavBar.style";

function NavBar() {
  return (
    <NavBarStyle>
      <div className="navbar-left">
        <Logo />
      </div>
      <nav className="navbar-right">
        <NavText to="/">Home</NavText>
        <NavText to="/">Our Locations</NavText>
        <NavText to="/">Contact Us</NavText>
        <NavText fill to="">
          Sign Up as Rider
        </NavText>
      </nav>
    </NavBarStyle>
  );
}

export default NavBar;
