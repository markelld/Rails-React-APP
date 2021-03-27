import { Switch, Route} from "react-router-dom";   
// import { useState, useEffect } from 'react';
import './App.css'; 
import Home from "./Screens/Home/Home";
import Register from "./Screens/Register/Register"; 
import SignIn from "./Screens/SignIn/SignIn";
import Layout from "./Components/Layout/Layout";


function App() { 

  
  return (
    <div className="App">
      <Switch> 
        <Route exact path="/"> 
          <Layout>
              <Home/>
          </Layout>
        </Route> 
        <Route exact path="/register">
          <Register

          />
        </Route> 
        <Route exact path="/signin">
          <SignIn

          />
        </Route>
      </Switch>
    </div>
  );
}
            

export default App;
