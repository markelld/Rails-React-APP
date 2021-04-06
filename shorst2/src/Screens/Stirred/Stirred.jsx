import "./Stirred.css";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function Stirred(props) {
  
  const { stirred, setStirred } = props;
  
  return (
  <div>
    {stirred && <ListGroup>
      {stirred.map((cocktail) => {
        return (<Link key={cocktail.id} to={`/cocktaildetails/${cocktail.id}`}>
        <ListGroup.Item>{cocktail.name}</ListGroup.Item></Link>)
    })}</ListGroup>}  
  </div>
  )
}

export default Stirred;