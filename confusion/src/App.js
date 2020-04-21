import React from 'react';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuCompenents';

function App() {
  return (
    <div >
        <Navbar dark color="primary" >
          <div className="container ml-5">
            <NavbarBrand href="/" >Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
    </div>
  );
}

export default App;
