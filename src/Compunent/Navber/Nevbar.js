import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSearch,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import AddCard from "../Card/AddCard/AddCard";

const Nevbar = () => {
  const [Style, setStyle] = useState(true);
  return (
    <div className="" bg="light">
    <div className="header">
      <div className="row" bg="light">
        <div className="col-5">
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "auto" }}
                navbarScroll
              >
                <Nav.Link href="#action1" className="headerText-size">Home</Nav.Link>
                <Nav.Link href="#action2" className="headerText-size">Features</Nav.Link>
                <NavDropdown title="Shop" id="navbarScrollingDropdown" className="headerText-size">
                  <NavDropdown.Item href="#action3" className="headerText-size">
                    Shop
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4" className="headerText-size">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5" className="headerText-size">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" className="headerText-size">
                  Blog
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="col-1">
          <h1 className="justify-content-center pt-3">DSC</h1>
        </div>
        <div className="col-6">
          <div className="header-item">
            <ul className="navBer d-flex justify-content-end">
              <li>
                <Link to="/home" className="search">
                  <FontAwesomeIcon icon={faSearch} class="navIcon" />
                </Link>
              </li>
              <li className="compare">
                <Link to="/compare">
                  <FontAwesomeIcon icon={faHeart} class="navIcon" />
                </Link>
              </li>
              <li className="wishlist">
                <Link to="/wishlist">
                  <FontAwesomeIcon icon={faSyncAlt} class="navIcon" />
                </Link>
              </li>
              <li className="userName">
                <Link to="/userName">My account</Link>
              </li>
              <li className="cart-Toggle" onClick={() => setStyle(!Style)}>
                <Link to="/cartCount" id="cart-Toggle-btn">
                  0
                </Link>
              </li>
            </ul>
          </div>
          <div className={!Style && "showNavBar"} id="sideNav">
            <AddCard/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Nevbar;
