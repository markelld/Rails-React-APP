import "./Post.css" 
import { useState } from "react"; 
import { useHistory } from "react-router-dom" 
import Form from 'react-bootstrap/Form'; 
import "./Post.css"

function Post(props) {
  
  const [formData, setFormData] = useState({
    name: '', 
    variety: '', 
    ingredients: '', 
    build: '',
  }) 

  const { name, variety, ingredients, build } = formData; 
  const { handleCreate } = props; 
  const history = useHistory();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newPost = { [name]: value } 
    setFormData(formData => { 
      return {...formData, ...newPost}
    })
  }
  
  
  return (
        <Form
          onSubmit={(e) => {
            e.preventDefault(); 
            handleCreate(formData); 
            history.push('/');
          }}> 
        <div className="newpost-div"> 
          <div className="postform-container"> 
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
              placeholder="Shaken or Stirred" 
              value={variety} 
              onChange={handleChange} 
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
          <button className="post-button">submit</button>
          </Form.Group> 
          <br /> 
          </div>
          </div>
        </Form> 
  )
} 

export default Post;



      