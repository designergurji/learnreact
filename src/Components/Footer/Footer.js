import React from 'react'
import { Container } from "../../globalStyles"
import {FooterSection} from "./FooterElm"

const Footer = (props) => {
    return (
        <>
           <FooterSection>
            <Container>
               <p>{props.footetext}</p>
            </Container>  
           </FooterSection>
        </>
    )
}
export default Footer;
