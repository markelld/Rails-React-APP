import "./Update.css"
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

function Update(props) {
  
  const [formData, setFormData] = useState({
    name: "",
    variety: "",
    ingredients: "",
    build: ""
  });
  
  const { name, variety, ingredients, build } = formData;
  const { cocktails, handleUpdate } = props;
  const { id } = useParams();
  const history = useHistory();
  
  useEffect(() => {
    const prefillFormData = () => {
      const cocktailItem = cocktails.find((cocktail) => cocktail.id === Number(id));
      // console.log(cocktailItem)
      // debugger
      setFormData({
        // name: cocktailItem.name,
        // variety: cocktailItem.variety,
        // ingredients: cocktailItem.ingredients,
        // build: cocktailItem.ingredients
      }); 
      
    }
      if (cocktails.length) {
        prefillFormData();
    }
  }, [cocktails, id])
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
        history.push('/');
      }}
    >
      <div className="parent-div">
        <div className="editform-container">
          <Form.Group>
            <Form.Control
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="variety"
              placeholder="variety"
              value={variety}
              onChange={ handleChange }
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="ingredients"
              placeholder="ingredients"
              value={ingredients}
              onChange={handleChange}
              as="textarea"
              cols={35}
              rows={3}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="build"
              placeholder="build"
              value={build}
              onChange={handleChange}
              as="textarea"
              cols={35}
              rows={3}
              required
            />
          </Form.Group>
          <br />
          <Button className="editpost-button">Post</Button>
        </div>
      </div>
    </Form>
  )
}

export default Update;


