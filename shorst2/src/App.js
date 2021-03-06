import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./Services/users";
import {
  getCocktails,
  postCocktail,
  putCocktail,
  destroyCocktail,
} from "./Services/Cocktails";

import "./App.css";
import Home from "./Screens/Home/Home";
import Register from "./Screens/Register/Register";
import SignIn from "./Screens/SignIn/SignIn";
import Post from "./Screens/Post/Post";
import Layout from "./Components/Layout/Layout";
import Shaken from "./Screens/Shaken/Shaken";
import Stirred from "./Screens/Stirred/Stirred";
import CocktailDetails from "./Screens/CocktailDetails/CocktailDetails";
import Update from "./Screens/Update/Update";
import Contact from "./Screens/Contact/Contact";
import Profile from "./Screens/Profile/Profile";



function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();
  const [cocktails, setCocktails] = useState([]);
  const [shaken, setShaken] = useState([]);
  const [stirred, setStirred] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [randomResults, setRandomResults] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    try {
      const userData = await loginUser(formData);
      setCurrentUser(userData);
      setError(null);
      history.push("/");
    } catch (e) {
      setError("invalid login credentials");
    }
  };
  const handleRegister = async (formData) => {
    try {
      const currentUser = await registerUser(formData);
      setCurrentUser(currentUser);
      history.push("/");
    } catch (e) {
      setError("invalid sign up info");
    }
  };
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  //cocktails

  useEffect(() => {
    const fetchCocktails = async () => {
      const cocktailList = await getCocktails();
      setCocktails(cocktailList);
      // console.log(cocktailList)
      getShaken(cocktailList);
      getStirred(cocktailList);
    };
    fetchCocktails();
  }, []);

  const handleCreate = async (cocktailData) => {
    const newCocktail = await postCocktail(cocktailData);
    setCocktails((prevState) => [...prevState, newCocktail]);
  };

  const handleDelete = async (id) => {
    await destroyCocktail(id);
    setCocktails((prevState) =>
      prevState.filter((cocktail) => cocktail.id !== id)
    );
    history.push("/");
  };

  const handleUpdate = async (id, formData) => {
    const updateCocktail = await putCocktail(id, formData);
    setCocktails((prevState) =>
      prevState.map((cocktail) => {
        return cocktail.id === Number(id) ? updateCocktail : cocktail;
      })
    );
    history.push("/");
  };
  // function for shaken button
  const getShaken = (shakenData) => {
    const shakenResults = cocktails.filter(
      (cocktail) => cocktail.variety === "Shaken"
    );
    setShaken(shakenResults);
  };

  const getStirred = (stirredData) => {
    const stirredResults = cocktails.filter(
      (cocktail) => cocktail.variety === "Stirred"
    );
    setStirred(stirredResults);
  };
  //searchfilter
  const handleChange = (e) => {
    setSearch(e.target.value);

    if (e.target.value) {
      let value = e.target.value;
      searchFilter(value, cocktails);
    }
  };

  const searchFilter = (value, cocktails) => {
    const resultsSearch = cocktails.filter((cocktail) =>
      cocktail.name.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(resultsSearch);
  };
  ///random cocktail

  // const resultCocktail = cocktails[Math.floor(Math.random() * cocktails.length)]
  // console.log(resultCocktail)
  // setRandomResults(resultCocktail)

  const randomCocktail = (cocktails,length) => {
    const resultCocktail = cocktails[Math.floor(Math.random() * cocktails.length)]; 
    setRandomResults(resultCocktail)
    console.log(resultCocktail)
  };
  

  // const resultCocktail = cocktails[Math.floor(Math.random() * cocktails.length)]
  //   console.log(resultCocktail)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Layout handleLogout={handleLogout} currentUser={currentUser}>
            <Home
              currentUser={currentUser}
              cocktails={cocktails}
              getShaken={getShaken}
              getStirred={getStirred}
              search={search}
              searchResults={searchResults}
              handleChange={handleChange}
              // randomCocktail={randomCocktail}
              randomResults={randomResults}
            />
          </Layout>
        </Route>
        <Route exact path="/register">
          <Layout>
            <Register handleRegister={handleRegister} />
          </Layout>
        </Route>
        <Route exact path="/signin">
          <Layout>
            <SignIn handleLogin={handleLogin} />
          </Layout>
        </Route>
        <Route exact path="/post">
          <Layout currentUser={currentUser}>
            <Post currentUser={currentUser} handleCreate={handleCreate} />
          </Layout>
        </Route>
        <Route exact path="/shaken">
          <Layout currentUser={currentUser}>
            <Shaken shaken={shaken} setShaken={setShaken} />
          </Layout>
        </Route>
        <Route exact path="/stirred">
          <Layout currentUser={currentUser}>
            <Stirred stirred={stirred} setStirred={setStirred} />
          </Layout>
        </Route>
        <Route exact path="/cocktaildetails/:id">
          <Layout currentUser={currentUser}>
            <CocktailDetails
              currentUser={currentUser}
              handleDelete={handleDelete}
              cocktails={cocktails}
            />
          </Layout>
        </Route>
        <Route exact path="/update/:id">
          <Layout currentUser={currentUser}>
            <Update
              cocktails={cocktails}
              handleUpdate={handleUpdate}
              currentUser={currentUser}
            />
          </Layout>
        </Route>
        <Route exact path="/contact">
          <Layout currentUser={currentUser}>
            <Contact currentUser={currentUser} />
          </Layout>
        </Route>
        <Route exact path="/profile">
          <Layout currentUser={currentUser}> 
            <Profile
              cocktails={cocktails}
              currentUser={currentUser}
              handleDelete={handleDelete}
            />
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
