import React from 'react';
import './App.css';
import Home from './components/Home';
import RestaurantUpdate from './components/RestaurantUpdate'
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantSearch from './components/RestaurantSearch'
import RestaurantDetail from './components/RestaurantDetail'
import RestauranstList from './components/RestauranstList'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
function App() {
  return (
    <div>
 
  <Router>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Update'>Update</Link></li>
      <li><Link to='/Create'>Create</Link></li>
      <li><Link to='/Detail'>Detail</Link></li>
      <li><Link to='/List'>List</Link></li>
      <li><Link to='/Search'>Search</Link></li>
    </ul>
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
