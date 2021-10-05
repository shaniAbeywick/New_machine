import React from 'react'
import "./navbar.css"

import {
    Nav,NavLink,Bars,NavMenu
} from "./NavebarElements"

const Navbar = () => {
    return (
        <>
            <Nav>

                <Bars />
                <NavMenu>
                   <NavLink exact to='/' activeStyle={{ background: "#F2F2F2" }}  >
                        ASSEMBLY
                    </NavLink>
                   
                    
                    
                    <NavLink to='/factory2' activeStyle={{ background: "#F2F2F2" }}>
                        PRINTING
                    </NavLink>
                    
                    <NavLink to='/factory3'activeStyle={{ background: "#F2F2F2" }} >
                        INM
                    </NavLink>
                    
                    <NavLink to='/factory4' activeStyle={{ background: "#F2F2F2" }}>
                        GENERAL
                    </NavLink>
                    

                </NavMenu>

            </Nav>
        </>
    )
}

export default Navbar



