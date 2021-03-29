import { Switch, Route, useHistory } from "react-router-dom";   
import { useState, useEffect } from 'react'; 
import { loginUser, registerUser, verifyUser, removeToken } from './Services/users';


import './App.css'; 
import Home from "./Screens/Home/Home";
import Register from "./Screens/Register/Register"; 
import SignIn from "./Screens/SignIn/SignIn";
import Layout from "./Components/Layout/Layout";


function App() { 

  const [currentUser, setCurrentUser] = useState(null);  
  const [error, setError] = useState(null); 
  const history = useHistory();
  
  useEffect(() => { 
    const handleVerify = async () => {
      const userData = await verifyUser(); 
      setCurrentUser(userData)
    } 
    handleVerify();
  }, []) 
  
  const handleLogin = async (formData) => {
    try {
      const userData = await loginUser(formData); 
      setCurrentUser(userData); 
      setError(null);  
      history.push('/'); 
    } catch (e) {
      setError("invalid login credentials");
    }
  }
  const handleRegister = async (formData) => {
    try {
      const currentUser = await registerUser(formData); 
      setCurrentUser(currentUser); 
      history.push('/') 
    } catch (e) {
      setError("invalid sign up info")
    }
  } 
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }
  
  
  
  
  
  return (
    <div className="App">
      <Switch> 
        <Route exact path="/"> 
          <Layout>
            <Home
              currentUser={currentUser}
              />
          </Layout>
        </Route> 
        <Route exact path="/register"> 
          <Layout>
          <Register
            handleRegister={handleRegister}
          />
          </Layout>
        </Route> 
        <Route exact path="/signin"> 
          <Layout>
          <SignIn
            handleLogin={handleLogin}
          />
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}


            

export default App;
