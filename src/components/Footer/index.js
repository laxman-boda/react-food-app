import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMediaWrap,
    SocilaMedia
    } from "./FooterElements"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocilaMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink 
                                href="/" 
                                target="_blank" 
                                aria-label="Facebook" 
                                rel="noopener noreferrer"> 
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink 
                                href="/" 
                                target="_blank" 
                                aria-label="Instagram" 
                                rel="noopener noreferrer"> 
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink 
                                href="/" 
                                target="_blank" 
                                aria-label="Twitter" 
                                rel="noopener noreferrer"> 
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink 
                                href="/" 
                                target="_blank" 
                                aria-label="Youtube" 
                                rel="noopener noreferrer"> 
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink 
                                href="/" 
                                target="_blank" 
                                aria-label="LinkedIn" 
                                rel="noopener noreferrer"> 
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocilaMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
