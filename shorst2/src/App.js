import { Switch, Route, useHistory } from "react-router-dom";   
import { useState, useEffect } from 'react'; 
import { loginUser, registerUser, verifyUser, removeToken } from './Services/users'; 
import { getCocktails, getOneCocktail, postCocktail, putCocktail, destroyCocktail } from './Services/Cocktails';


import './App.css'; 
import Home from "./Screens/Home/Home";
import Register from "./Screens/Register/Register"; 
import SignIn from "./Screens/SignIn/SignIn"; 
import Post from "./Screens/Post/Post";
import Layout from "./Components/Layout/Layout";


function App() { 

  const [currentUser, setCurrentUser] = useState(null);  
  const [error, setError] = useState(null); 
  const history = useHistory();  
  const [cocktails, setCocktails] = useState([]); 
  const [shaken, setShaken] = useState([]); 
  // const [stirred, setStirred] = useState([]);
  
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

  //cocktails 

  useEffect(() => {
    const fetchCocktails = async () => {
      const cocktailList = await getCocktails(); 
      setCocktails(cocktailList); 
      // console.log(cocktailList)  
      getShaken(cocktailList)
    } 
    fetchCocktails();
  }, [])    
 
  
  const handleCreate = async (cocktailData) => {
    const newCocktail = await postCocktail(cocktailData); 
    setCocktails(prevState => [...prevState, newCocktail]);
  } 

  const handleDelete = async (id) => {
    await destroyCocktail(id); 
    setCocktails(prevState => prevState.filter((cocktail) => cocktail.id !== id)) 
    history.push('/main');
  } 

  const handleUpdate = async (id, formData) => {
    const updateCocktail = await putCocktail(id, formData); 
    setCocktails(prevState => prevState.map((cocktail) => {
      return cocktail.id === Number(id) ? updateCocktail : cocktail
    })); 
    history.push("/")
  }
 // function for shaken button 
 const getShaken = (shakenData) => {
   const shakenResults = cocktails.filter(cocktail => cocktails.variety === "Shaken") 
   setShaken(shakenResults)  
   console.log(shakenData)
}



  
  
  
  
  return (
    <div className="App">
      <Switch> 
        <Route exact path="/"> 
          <Layout 
            handleLogout={handleLogout}
            currentUser={currentUser}>
            <Home
              currentUser={currentUser} 
              cocktails={cocktails}  
              getShaken={getShaken}

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
        <Route>
          <Layout
            currentUser={currentUser}
          >
            <Post  
            currentUser={currentUser}
            handleCreate={handleCreate}
            />
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}


            

export default App;
