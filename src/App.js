import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import DataFetcher from './components/DataFetcher';

// Definición de componentes para rutas
const Home = () => (
  <Container>
    <HelloWorld name="React Developer" />
  </Container>
);

const About = () => (
  <Container>
    <h1>About Page</h1>
    <Counter />
  </Container>
);

const Contact = () => (
  <Container>
    <h1>Contact Page</h1>
    <DataFetcher />
  </Container>
);

function App() {
  return (
    <Router>
      {/* Barra de navegación con Material-UI */}
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
