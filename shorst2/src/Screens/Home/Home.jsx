import "./Home.css"
import { Link } from "react-router-dom";
import { useState } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";




function Home(props) {
  
  // const [searchResults, setSearchResults] = useState([]);
  // const [search, setSearch] = useState("");
  // const { randomCocktail, setRandomCocktail } = useState([]);
  const { cocktails, currentUser, getShaken, getStirred, search, searchResults, handleChange } = props;
  
  //search function
  // searchHandleChange = (e) => {
  //   setSearch(e.target.value)
    
  //   if (e.target.value) {
  //     let value = e.target.value
  //     searchFilter(value,cocktails)
  //   }
  // }
  
  // const searchFilter = (value, cocktails) => {
  //   const resultsSearch = cocktails.filter(cocktail => cocktail.name.toLowercase().includes(value.toLowercase()))
    
  //   setSearchResults(resultsSearch)
  // }
  
  // //random function  
  // // const getRandomCocktail = (cocktails ) => {
  //   const result = cocktails.Math.floor(Math.random() * cocktails.length)
  // //   getRandomCocktail(result)
  // // } 
  
  
  return (
    <div className="body">
      <div className="search-block">  
        <input
          type="text"
          placeholder="Search" 
          className="cocktail-search"
          value={search} 
          name="search"
          onChange={(e) => props.handleChange(e)}
          
        />
        <button>search</button>
        {searchResults && searchResults.map((cocktail, index) => {
          return (
            <div key={index}>
              <Link to={`/cocktaildetails/${cocktail.id}`}><h4>{cocktail.name}</h4>d</Link></div>
          )})}
        {/* <div className="cocktail-button">
          <div className="shaken-div">
            <button className="shaken-button"
            onClick={() => props.getShaken()}
            ><Link to="/shaken">Shaken</Link></button>
          </div>
          <div className="stirred-div">
            <button className="stirred-button"
              onClick={( ) => props.getStirred()}
            ><Link to="/stirred">Stirred</Link></button>
          </div>
        </div> */}
      </div> 
      <div className="random-cocktail">
        <div className="shakendiv-1">
            <button className="shaken-button"
            onClick={() => props.getShaken()}
            ><Link to="/shaken">Shaken</Link></button>
        </div>  
        <div className="randomdiv-2">
          <button className="random-button">random recipe</button>
        </div>
        <div className="stirreddiv-3">
            <button className="stirred-button"
              onClick={( ) => props.getStirred()}
            ><Link to="/stirred">Stirred</Link></button>
        </div>
      </div>
    </div>
  )
} 

export default Home;
       


       
         
        


        

