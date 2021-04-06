import "./CocktailDetails.css"
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOneCocktail } from "../../Services/Cocktails";


function CocktailDetails(props) {
  const { cocktailItem, setCocktailItem } = useState(null);
  const { id } = useParams();
  const { currentUser, handleDelete, cocktails } = props;
  // useEffect(() => {
  //   const fetchCocktailRecipe = async () => {
  //     const cocktailData = await getOneCocktail(id);
  //     setCocktailItem(cocktailData); 
    
    
  //   }
  //   fetchCocktailRecipe();
  // },[id])
  
  return (
    <div>
      <div className="recipe-div">
        <h1>name</h1>
      </div>
      <div className="reviews">

      </div>
    </div>
  )
} 
export default CocktailDetails;
   
  
    

/// must include optional rendering for crud otherwise brackdown of cocktail should always show