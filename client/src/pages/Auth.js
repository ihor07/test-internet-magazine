import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import Row from 'react-bootstrap/Row'
const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Login' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Input your email" />
          <Form.Control className="mt-3" placeholder="Input your password" />
          <Row className="d-flex justify-content-between mt-3 pr-3 pl-3">
            {isLogin ? (
              <div>
                No Account?
                <NavLink className="pl-2" to={REGISTRATION_ROUTE}>
                  Register!
                </NavLink>
              </div>
            ) : (
              <div>
                Registred?
                <NavLink className="pl-2" to={LOGIN_ROUTE}>
                  Login!
                </NavLink>
              </div>
            )}
            <Button variant={'outline-info'}>
              {isLogin ? 'Login' : 'Registration'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth
