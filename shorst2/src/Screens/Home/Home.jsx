import "./Home.css"
import { Link } from "react-router-dom";




function Home(props) {
  
  const { cocktails, currentUser, getShaken, getStirred } = props; 
  //search function
  
  //random function 
  
  return (
    <div className="body">
      <div className="search-block">  
        <input
          placeholder="Search" 
          className="cocktail-search"
        />  
        <div> 
         
            <button className="shaken-button"
            onClick={() => props.getShaken()}
            ><Link to="/shaken">Shaken</Link></button>
         
       
          <button className="stirred-button"
            onClick={( ) => props.getStirred()}
          ><Link to="/stirred">Stirred</Link></button>
        </div>
      </div> 
      <div className="random-cocktail"> 
        <button className="random-button">random recipe</button> 
        {/* append random cocktail card below */}
      </div>
    </div>
  )
} 

export default Home;
        


        

