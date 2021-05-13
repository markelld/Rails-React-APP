import "./Header.css"  
import Navbar from 'react-bootstrap/Navbar';  
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';  
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { currentUser, handleLogout } = props; 

  return ( 
    <Navbar collapseOnSelect expand="lg" className='header'>  
      <LinkContainer to="/">
        <Navbar.Brand>SS</Navbar.Brand>
      </LinkContainer> 
      <LinkContainer to="/signin">
        <Nav.Link>Sign In</Nav.Link>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">  
          {
            currentUser ? 
              <> 
                <Nav.Link>{currentUser.username }</Nav.Link>  
              </> 
              : 
              <Link to="/"></Link> 
          } 
          <hr /> 
          {  
            currentUser &&
            <>
              <LinkContainer to="/post">
                <Nav.Link>Post</Nav.Link>
              </LinkContainer>          
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link onClick={handleLogout} >Sign Out</Nav.Link>
              </LinkContainer>
            </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  
    
  )
} 

export default Header;
