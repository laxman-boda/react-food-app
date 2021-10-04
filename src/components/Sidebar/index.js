import React from 'react'
import {
        SidebarContainer,
        SidebarLink,
        SidebarMenu,
        SideBtnWrap,
        SidebarRoute,
        CloseIcon,
        Icon
    } from "./SidebarElements"
const Sidebar = ({isOpen, toggle}) => {
    return (
            <SidebarContainer isOpen={isOpen} toggle={toggle}>
                <Icon onClick={toggle }>
                    <CloseIcon />
                </Icon>
                <SidebarMenu>
                    <SidebarLink to="/">Startes</SidebarLink>
                    <SidebarLink to="/">Biryani</SidebarLink>
                    <SidebarLink to="/">Full Menu</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/">Order Now</SidebarRoute>
                </SideBtnWrap>
            </SidebarContainer>
    )
}

export default Sidebar
