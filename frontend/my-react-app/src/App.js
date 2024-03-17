import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Switch, Route ,Router} from 'react-router-dom';

import Login from './Login'; // 
import Homepage from './Homepage';
import SignIn from './SignIn' ;
import Train from './Train';
import Seats from './Seats';

import Station from './Station';
import Train_details from './Train_details' ;
// import Passenger from './Passenger';

function App() {  
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Homepage" element={<Homepage/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/Train" element={<Train/>}/>
        <Route path="/Station" element={<Station/>}/>
        <Route path="/Train_details" element={<Train_details/>}/>
        <Route path="/Seats" element={<Seats/>}/>
        {/* <Route path="/Passenger" element={<Passenger/>}/>  */}


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