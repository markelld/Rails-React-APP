import "./Stirred.css";
// import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function Stirred(props) {
  
  const { stirred, setStirred } = props;
  
  return (
  <div className="stirredlist-div">
    {stirred && <div className="stirredlist-group">
      {stirred.map((cocktail) => {
        return (<Link key={cocktail.id} to={`/cocktaildetails/${cocktail.id}`}>
        <button className="stirredcocktail-buttons">{cocktail.name}</button></Link>)
    })}</div>}  
  </div>
  )
}

export default Stirred;