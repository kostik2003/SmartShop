import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/esm/Button';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';


const Auth = () => {
const location = useLocation()
const isLogin = location.pathname === LOGIN_ROUTE


  return (
    <Container className= "d-flex justify-content-center align-items-center"
    style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
        <Form.Control
        className="mt-3"
        placeholder='Введите ваш email...'
        />
        <Form.Control
        className="mt-3"
        placeholder='Введите ваш пароль...'
        />
          <div>
            <Button className='mt-3'
              variant='outline-dark'>{isLogin ? 'Войти' : 'Регистрация'}</Button>
          </div>
          {
            isLogin ?
          <div className="mt-2">
              Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
            </div>
            :
            <div className="mt-2">
              Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
            </div>
          }
        </Form>
      </Card>
    </Container>
  )
}

export default Auth;