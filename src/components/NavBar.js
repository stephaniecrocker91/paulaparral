import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styles/NavBar.module.css'

function NavBar() {
  return (
    <Navbar expand="lg" className={`bg-body-tertiary ${styles.NavBar}`}>
      <Container fluid>
        <Navbar.Brand href="#" className={styles.Logo}>Paula Parral</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={`me-auto my-2 my-lg-0 ${styles.Links}`}
            
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className={styles.Link}>Home</Nav.Link>
            <Nav.Link href="#action2" className={styles.Link}>Registros Akashicos</Nav.Link>
            <Nav.Link href="#action3" className={styles.Link}>Acerca de la Lectora</Nav.Link>
            <Nav.Link href="#action3" className={styles.Link}>Blog</Nav.Link>
            <Nav.Link href="#action4" className={styles.Link}>Contacto</Nav.Link>

            
            
            
          </Nav>
          <div className="d-flex">
          <a className={styles.Social} href="https://www.facebook.com/paula.parral.7" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
          <a className={styles.Social} href='https://www.instagram.com/paulaparral/'target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-instagram"></i></a>
          <a className={styles.Social} href="mailto:paulaparral@hotmail.com"><i class="fa-solid fa-envelope"></i></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;