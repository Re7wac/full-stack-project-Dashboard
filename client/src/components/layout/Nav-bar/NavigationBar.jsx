// import React from "react";
// import { Link } from "react-router-dom";
// import { Nav, Navbar, Button } from "react-bootstrap";
// import styled from "styled-components";

// const Styles = styled.div`
//   .navbar {
//     background-color: #222;
//   }
//   a,
//   .navbar-brand,
//   .navbar-nav .nav-link {
//     color: #bbb;
//     &:hover {
//       color: white;
//     }
//   }
// `;

// export const NavigationBar = () => (

// );
import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;
const NavigationBar = () => {
  // const [loading, setLoading] = useState(false);

  return (
    <div>
      <Styles>
        <Navbar expand="lg  ">
          <Navbar.Brand href="/">Code Life</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-5">
              <Nav.Item>
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/contact">Contact</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Button

            // onClick={(loadData) => {
            //   setLoading({ loading: true });
            //   setTimeout(() => {
            //     this.setState({ loading: false });
            //   }, 2000);
            // }}

            // disabled={loading}
            >
              <Link to="/loginlanding">Sign in</Link>
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    </div>
  );
};

export default NavigationBar;
