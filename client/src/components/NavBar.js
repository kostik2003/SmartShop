import React, { useContext } from "react";
import { Context } from "..";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import Button from "react-bootstrap/Button"

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color:'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
          <Nav className="ml-auto" style={{color:'white'}}>
            <Button variant={"outline-light"}>Авторизация</Button>
            <Button variant={"outline-light"}>Админ панель</Button>
          </Nav>
        </Container>
      </Navbar>
      </div>
    );
};

export default NavBar;