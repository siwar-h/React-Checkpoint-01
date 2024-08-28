import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './Compoments/Name';
import Description from './Compoments/Description';
import Price from './Compoments/Price';
import Image from './Compoments/Image';


const firstName = "Siwar"; 
function App() {
  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem' }} className="mx-auto">
        <Card.Body>
          <Image />
          <Card.Title> <Name /></Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="text-center mt-3">
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="https://i.etsystatic.com/27595895/r/il/28248b/3451028228/il_570xN.3451028228_ogaa.jpg" alt="Profile" style={{ width: '300px', height: '100px' }} />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </Container>
  );
}

export default App;
