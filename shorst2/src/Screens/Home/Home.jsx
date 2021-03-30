import "./Home.css"

function Home(props) {
  
  //search function
  
  //random function 
  
  return (
    <div className="body">
      <div className="search-block"> 
        <input
          placeholder="Search" 
          className="cocktail-search"
        />

      </div> 
      <div className="random-cocktail"> 
        <button className="random-button">random recipe</button> 
        {/* append random cocktail card below */}
      </div>
    </div>
  )
} 

export default Home;
