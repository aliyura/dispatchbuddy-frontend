import React from 'react'
import styled from 'styled-components'
import logo  from "../../assets/images/Logo.png"
function Logo() {
  return (
      <LogoStyle>
          <img src={logo} alt="logo"/>
    </LogoStyle>
  )
}

export default Logo;

const LogoStyle = styled.div`
width: 14rem;
margin: 0 auto 1rem;
img{
    width: 100%;
}
`