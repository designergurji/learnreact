import styled from "styled-components";

export const HeaderSection = styled.div`
  background-color: #333;
  padding: 1rem 0;
  position: sticky;
  top: 0px;
  left: 0px;
  width: 100%;
  
`
export const Logo = styled.h1`
 color: #fff;
 font-size: 1.5rem;
 margin: 0px;
 padding: 0px;
`
export const NavBar = styled.nav`
 margin-left: auto;
`
export const NavBarUl = styled.ul`
margin: 0px;
padding: 0px;
list-style: none;
display: flex;
align-items: center;
`

export const NavBarItems = styled.li`
margin: 0 0 0 15px;
padding: 0px;
color: #fff;
font-size: 0.9rem;
cursor: pointer;
&:hover{
    color: #f00;
}
`