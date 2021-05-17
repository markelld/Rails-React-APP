import "./CocktailDetails.css"
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOneCocktail } from "../../Services/Cocktails";
// import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';


function CocktailDetails(props) {
  const { cocktailItem, setCocktailItem } = useState(null);
  const { id } = useParams();
  const { currentUser, handleDelete, cocktails} = props;
  
  const cocktail = cocktails.find(cocktail => cocktail.id == id)
  console.log(cocktail)
  // useEffect(() => {
  //   const fetchCocktailRecipe = async () => {
  //     const cocktailData = await getOneCocktail(id);
  //     setCocktailItem(cocktailData); 
    
    
  //   }
  //   fetchCocktailRecipe();
  // },[id])
  // console.log(setCocktailItem)
  
  return (
    <div className="main-div">
      {/* <div className="recipe-div"> */}
        <Card  className="card" style={{ width: '22rem' }}>
          <Card.Body>
            <Card.Title>
              {cocktail.name}
            </Card.Title>
            <br/>
            <Card.Subtitle className="mb-2 text-muted">Ingredients</Card.Subtitle>
            <Card.Text>
              {cocktail.ingredients}
            </Card.Text>  
            <br/> 
            <Card.Subtitle className="mb-2 text-muted">Build</Card.Subtitle>
            <Card.Text>
              {cocktail.build}
            </Card.Text>
            <button onClick={() => handleDelete(cocktailItem.id)}
              className="delete-button">delete</button>
                <Link to={`/update/${cocktail.id}`}>
                  <button className="edit-button">edit</button>
                </Link>
          </Card.Body>
        </Card>
      {/* </div> */}
      {/* <div className="button-div">
          <Button className="delete-button">delete</Button>
        <Link to={`/update/${cocktail.id}`}>
          <Button className="edit-button">edit</Button>
        </Link>
      </div> */}
      <div className="reviews">
      </div>
    </div>
  )
} 
export default CocktailDetails;

        
   
  
    

/// must include optional rendering for crud otherwise brackdown of cocktail should always show