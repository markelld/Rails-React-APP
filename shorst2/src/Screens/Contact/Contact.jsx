import "./Contact.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from "sweetalert2";
import emailjs from "emailjs-com";

const Contact = () => {



  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
        console.log(result.text);
        swal.fire(
          "Message Sent",
          "Message will get back to you as he can!",
          "Success"
        )
      }, (error) => {
        console.log(error.text);
        swal.fire(
          "Message Sent",
          error.text,
          "error"
        )
      });
    e.target.reset()
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <div className="contactform-div">
        <div className="contactform-container" >
        <Form.Group>
          <Form.Control
            name="user_name"
            placeholder="Name"  
            size="lg"
            type="name"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="user_email"
            placeholder="Email" 
            size="lg"
            type="email"
            required
          />
        </Form.Group>      
        <Form.Group>
          <Form.Control
            name="user_message"
            placeholder="Message"
            size="lg"
            as="textarea"
            cols={25}
            rows={5}
            required
          />
        </Form.Group>
          <Button
            type="submit"
            size="lg"
          >Submit
          </Button>
        </div>
        </div> 
      </Form>
  )
}

export default Contact;
 
      
            
