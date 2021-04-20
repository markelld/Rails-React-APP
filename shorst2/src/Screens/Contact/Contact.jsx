import "./Contact.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from "sweetalert2";
import emailjs from "emailjs-com";

const Contact = () => {

  return (
    <div className="contactform-div">
      <Form>
        <Form.Group>
          <Form.Control
            name="user_name"
            size="lg"
            type="name"
            required
          />
        </Form.Group>
        {/* <br /> */}
        <Form.Group>
          <Form.Control
            name="user_email"
            size="lg"
            type="email"
            required
          />
        </Form.Group>
        {/* <br /> */}
        <Form.Group>
          <Form.Control
            name="user_message"
            size="lg"
            as="textarea"
            cols={25}
            rows={5}
            required
          />
        </Form.Group>
        <div className="contactbutton-div">
          <Button
            type="submit"
            size="lg"
          >Submit
          </Button>
        </div>
      </Form>
    </div> 
  )
}

export default Contact;
            
