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
    <div> 
      <div className="newpost-form"> 
        <Form className="postform-edit"
          onSubmit={(e) => {
            e.preventDefault(); 
            handleCreate(formData); 
            history.push('/');
          }}> 
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
              required
            /> 
          </Form.Group>  
          <br />
          <Form.Group> 
            <Form.Control
              type="text" 
              name="build" 
              placeholder="build" 
              value={build} 
              onChange={handleChange} 
              required
            />
          </Form.Group> 
          <br /> 
          <button>go</button>
        </Form> 
      </div>
    </div>
  )
} 

export default Post;



      