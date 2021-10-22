import React from 'react';
import './App.css';
import Home from './components/Home';
import RestaurantUpdate from './components/RestaurantUpdate'
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantSearch from './components/RestaurantSearch'
import RestaurantDetail from './components/RestaurantDetail'
import RestauranstList from './components/RestauranstList'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Navbar ,Container,Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList,faHome,faPlus,faPen,faSearch,faUtensils} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
 
  <Router>


  <Navbar bg="dark" variant="dark">
    <Container className="Nav">
    <Navbar.Brand href="/"> <FontAwesomeIcon icon={faUtensils}/> Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link  href="/List"><FontAwesomeIcon icon={faList} /> List Of Restaurant</Nav.Link>
      <Nav.Link href="/Create"> <FontAwesomeIcon icon={faPlus}/> Create</Nav.Link>
      <Nav.Link href="/Update">  <FontAwesomeIcon icon={faPen}/> Update</Nav.Link>
      <Nav.Link href="/Search">  <FontAwesomeIcon icon={faSearch}/> Search</Nav.Link>
     
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
    <Route path='/Update/:id'
    render={props=>(<RestaurantUpdate
    {...props}/>
  )}
    >
    
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
