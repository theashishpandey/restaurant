import React from 'react';
import './App.css';
import Home from './components/Home';
import RestaurantUpdate from './components/RestaurantUpdate'
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantSearch from './components/RestaurantSearch'
import RestaurantDetail from './components/RestaurantDetail'
import RestauranstList from './components/RestauranstList'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Navbar ,Container,NavLink,Nav} from 'react-bootstrap'
function App() {
  return (
    <div>
 
  <Router>


  <Navbar bg="dark" variant="dark">
    <Container className="Nav">
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink  href="/List">List Of Restaurant</NavLink>
      <NavLink href="/Detail">Features</NavLink>
      <NavLink href="/Create">Create</NavLink>
      <NavLink href="/Search">Search</NavLink>
      <NavLink href="/Update">Update</NavLink>
    </Nav>
    </Container>
  </Navbar>

  <br />
  
{/* 
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Update'>Update</Link></li>
      <li><Link to='/Create'>Create</Link></li>
      <li><Link to='/Detail'>Detail</Link></li>
      <li><Link to='/List'>List</Link></li>
      <li><Link to='/Search'>Search</Link></li>
    </ul> */}
    <Route exact path='/'>

   

    <Home/>
    </Route>
    <Route path='/Update'>
    <RestaurantUpdate/>
    </Route>
    <Route path='/Create'>
    <RestaurantCreate/>
    </Route>
    <Route path='/Detail'>
    <RestaurantDetail/>
    </Route>
    <Route path='/List'>
    <RestauranstList/>
    </Route>
    <Route path='/Search'>
    <RestaurantSearch/>
    </Route>
    
  </Router>

  
    </div>
  );
}

export default App;
