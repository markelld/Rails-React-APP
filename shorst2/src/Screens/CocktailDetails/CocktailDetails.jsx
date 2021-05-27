import "./CocktailDetails.css"
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOneCocktail } from "../../Services/Cocktails";
// import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';


function CocktailDetails(props) {
  // const { cocktailItem, setCocktailItem } = useState(null);
  const { id } = useParams();
  const { currentUser, handleDelete, cocktails} = props;
  
  // const cocktailMatch = (cocktails, id) => {
    
  // }
  const cocktail = cocktails.find(cocktail => cocktail.id == id)
  // setCocktailItem(cocktail)
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
            <Card.Title className="title">
              {cocktail.name}
            </Card.Title>
            <br/>
            <Card.Subtitle className="title-ingredient">Ingredients</Card.Subtitle>
            <Card.Text className="ingredient-text">
              {cocktail.ingredients}
            </Card.Text>  
            <br/> 
            <Card.Subtitle className="title-build">Build</Card.Subtitle>
            <Card.Text className="build-text">
              {cocktail.build}
            </Card.Text>
          {cocktail &&
            (currentUser.id === cocktail.user_id ? (
            <div>

            
              <button onClick={() => handleDelete(cocktail.id)}
              className="delete-button">Delete</button>
                <Link to={`/update/${cocktail.id}`}>
                  <button className="edit-button">Edit</button>
              </Link>
              </div>
            ): (
            <></>
            ))}
            {/* <button onClick={() => handleDelete(cocktail.id)}
              className="delete-button">Delete</button>
                <Link to={`/update/${cocktail.id}`}>
                  <button className="edit-button">Edit</button>
                </Link> */}
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