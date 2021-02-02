import React from 'react'
import Pages from './pages/Pages'
import {BrowserRouter, Link} from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link> <Link to='/pegawai'>Pegawai </Link> </Nav.Link>
            </Nav>
        </Navbar>
        <Container>
          <Pages />
        </Container>
      </div>
      </BrowserRouter>
    )
  }
}
export default App;
