import "./Profile.css";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
// import { useParams} from "react-router-dom";
// import { getCocktails } from "../../Services/Cocktails";


function Profile(props) {
  
  
  const [userCocktails, setUserCocktails] = useState([]);
  const { currentUser, cocktails } = props
  // const { id } = useParams();
  // console.log(currentUser)
  // console.log(cocktails)
  // const user = currentUser.id;
  // // console.log(user)
  // const cocktailMatch = cocktails.filter(cocktail => cocktail.user_id == user)
  // console.log(cocktailMatch)
  
  

  useEffect(() => {
    const fetchUserCocktails = async () => {
      // const userCocktailList = await getCocktails();
      // const user = currentUser.id;
      const cocktailMatch = cocktails.filter(cocktail => cocktail.user_id == currentUser.id)
      console.log(cocktailMatch)
      setUserCocktails(cocktailMatch); 
    }
    fetchUserCocktails();
  }, []);
  
  
  return (
    <div className="main">
      <div>
        {}
      </div>
      {/* { cocktail && 
        (currentUser.id === cocktail.user_id ? (
        <div className="card-component">
          {cocktail.map((cocktail) => {

          })}
        </div>
        ):(
      <></>  
      ))} */}
    </div>
    )
}

export default Profile;
