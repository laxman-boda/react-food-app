import React from 'react'
import { Bars, Nav,NavIcon,NavLink } from './NavbbarElements'

const NavMain = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h2>Indian Spices</h2>
                    </NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default NavMain
