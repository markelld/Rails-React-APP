import "./Shaken.css";
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from "react-router-dom";

function Shaken(props) {
  
  const { shaken, setShaken } = props
  
  return (
    <div>
      {shaken && <ListGroup>
        {shaken.map((cocktail) => {
          return (<Link key={cocktail.id} to={`/cocktaildetails/${cocktail.id}`}>
          <ListGroup.Item>{cocktail.name}</ListGroup.Item></Link>)
    })}</ListGroup>}  
    </div>
  )
}

export default Shaken;
  

  // {shaken && <ListGroup>
  // {shaken.map((cocktail) => {
  //   return (<Link key={cocktail.id} to={`/cocktaildetail/${cocktail.id}`}><ListGroup.Item>
  //   {cocktail.name}</ListGroup.Item></Link>)
  //   })}</ListGroup>}   