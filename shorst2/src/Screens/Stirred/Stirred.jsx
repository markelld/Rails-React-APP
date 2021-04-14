import "./Stirred.css";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function Stirred(props) {
  
  const { stirred, setStirred } = props;
  
  return (
  <div className="list-div">
    {stirred && <ListGroup className="listgroup">
      {stirred.map((cocktail) => {
        return (<Link key={cocktail.id} to={`/cocktaildetails/${cocktail.id}`}>
        <ListGroup.Item>{cocktail.name}</ListGroup.Item></Link>)
    })}</ListGroup>}  
  </div>
  )
}

export default Stirred;