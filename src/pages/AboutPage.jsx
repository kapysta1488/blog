import React from 'react';
import Navigation from '../components/Navigation';
import { Jumbotron, Container } from 'react-bootstrap';

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <Jumbotron fluid>
        <Container>
          <h1>Здравия желаю</h1>
          <p>Это мой персональный блог</p>
        </Container>
      </Jumbotron>
    </>
  );
}
