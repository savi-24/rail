import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Switch, Route ,Router} from 'react-router-dom';

import Login from './Login'; // 
import Homepage from './Homepage';
// import Category from './Category';

// import train from './About';
import SignIn from './SignIn' ;
import Train from './Train';

function App() {  
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Homepage" element={<Homepage/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/Train" element={<Train/>}/>
        </Routes>
        
          
          
        {/* <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/category/:category">
          <Category />
          </Route>
          <Route path="/product/:productid">
          <Product />
        </Route>
        <Route path="/about">
            <About/>
            </Route>
            <Route path="/register">
          <Signup /> */}
        {/* </Route> */}

        
    </Router> 
  
  );
}

export default App;