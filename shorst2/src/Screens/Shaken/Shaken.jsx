import "./Shaken.css";
// import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from "react-router-dom";

function Shaken(props) {
  
  const { shaken, setShaken } = props
  
  return (
    <div className="shakenlist-div">
      {shaken && <div className="shakenlist-group">
        {shaken.map((cocktail) => {
          return (<Link key={cocktail.id} to={`/cocktaildetails/${cocktail.id}`}>
          <button className="cocktail-buttons">{cocktail.name}</button></Link>)
    })}</div>}  
    </div>
  )
}

export default Shaken;
  

  // {shaken && <ListGroup>
  // {shaken.map((cocktail) => {
  //   return (<Link key={cocktail.id} to={`/cocktaildetail/${cocktail.id}`}><ListGroup.Item>
  //   {cocktail.name}</ListGroup.Item></Link>)
  //   })}</ListGroup>}   