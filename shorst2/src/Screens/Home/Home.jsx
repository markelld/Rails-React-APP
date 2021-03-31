import "./Home.css"
import { Link } from "react-router-dom";
function Home(props) {
  
  const { cocktails, currentUser } = props; 
  console.log(cocktails)
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
          <Link to="/">
            <button className="shaken-button">Shaken</button> 
          </Link> 
          <Link to="/">
            <button className="stirred-button">Stirred</button>
          </Link>
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


        

