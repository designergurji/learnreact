import React, {} from 'react'
import { Container, CustomRow } from "../../globalStyles"
import {HeaderSection, Logo, NavBar, NavBarUl, NavBarItems } from "./HeaderElm"


const Header = ({logotext, handleShow}) => {
  

 return (
        <>
              <HeaderSection>
                <Container>
                  <CustomRow>
                    <Logo>{logotext.logotext}</Logo>
                    <NavBar>
                      <NavBarUl>
                        <NavBarItems>Home</NavBarItems>
                        <NavBarItems onClick={handleShow}>Add New</NavBarItems>
                      </NavBarUl>
                    </NavBar>
                  </CustomRow>
                </Container>
              </HeaderSection>
              
             
        
        </>
    )
}
export  default Header;
