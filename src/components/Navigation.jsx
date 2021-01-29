import React from 'react';
import { Nav, Navbar, FormControl, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Мой блог</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/" className="nav-link active">
          Главная
        </Link>
        <Link to="/about" className="nav-link">
          Эбаут ми
        </Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Поиск статьи" className="mr-sm-2" />
        <Button>Найти</Button>
      </Form>
    </Navbar>
  );
}
