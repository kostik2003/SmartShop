import React, { useContext } from "react";
import { Context } from "..";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import Button from "react-bootstrap/Button"
import {observer} from "mobx-react-lite"


const NavBar = observer (() => {
    const {user} = useContext(Context)
    return (
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink style={{color:'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
          {user.isAuth ? 
          <Nav style={{color:'white'}}>
            <Button variant={"outline-light"}>Админ панель</Button>
            <Button variant={"outline-light"}className="ms-4">Выйти</Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color:'white'}}>
            <Button className="ml-4" variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
          }
        </Container>
      </Navbar>
      </div>
    );
});

export default NavBar;