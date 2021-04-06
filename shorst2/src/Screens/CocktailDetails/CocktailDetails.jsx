import "./CocktailDetails.css"
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";


function CocktailDetails(props) {
  
  const { id } = useParams();
  const { currentUser, cocktails } = props;
  
  
  
  return (
    <div>
      <div className="recipe-div">
        
      </div>
    </div>
    
  )
} 
export default CocktailDetails;

/// must include optional rendering for crud otherwise brackdown of cocktail should always show