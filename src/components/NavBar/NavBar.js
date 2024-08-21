import React, { useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Button, Dropdown, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { navbarBrand, navs } from "../../config/config";
import logoImage from "../Images/logoImage.png";
import "../NavBar/NavBar.css";

function NavBar({ setLanguage }) {
  const navigate = useNavigate();
  const navRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [language, setLanguageState] = useState("en"); // Track the current language

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
    setSearchQuery("");
    setIsCollapsed(true);
  };

  const handleNavClick = () => {
    setIsCollapsed(true);
  };

  const handleLanguageChange = (lang) => {
    setLanguageState(lang); // Update the local language state
    setLanguage(lang); // Update the parent component's language state
    navigate("/"); // Navigate to the homepage to refresh the news
    setIsCollapsed(true);
  };

  const isSearchButtonDisabled = searchQuery.trim() === "";

  return (
    <>
      <Navbar
        ref={navRef}
        className="navbar"
        variant="dark"
        expand="lg"
        fixed="top"
        expanded={!isCollapsed}
      >
        <Navbar.Brand className="nav-brand" href="/">
          <img src={logoImage} alt="Logo" className="logo" />
          {navbarBrand}
        </Navbar.Brand>
        {isCollapsed && (
          <Navbar.Toggle
            className="border-0"
            aria-controls="basic-navbar-nav"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        )}

        {!isCollapsed && (
          <IoCloseOutline
            size={40}
            className="close-btn"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        )}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" onClick={handleNavClick}>
            {navs.map((navItem) => (
              <LinkContainer to={navItem.page} key={uuidv4()}>
                <Nav.Link className="nav-item">{navItem.nav}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
          <Form className="search-form" onSubmit={handleSubmit}>
            <FormControl
              type="text"
              placeholder="Explore news..."
              className="form-input form-control-lg mt-lg-2 mt-md-2 mt-sm-2 mt-xl-0"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Button
              className="search-btn mt-lg-2 ml-2 mt-md-2 mt-sm-2 mt-xl-0"
              onClick={handleSubmit}
              disabled={isSearchButtonDisabled}
            >
              Search
            </Button>
          </Form>
          <Dropdown style={{ marginLeft: '1rem' }}>
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{
                backgroundColor: '#343a40', // Match the navbar color
                border: 'none',
                color: 'white',
                fontSize: '1rem',
                padding: '0.5rem 1rem',
                borderRadius: '0.25rem',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                transition: 'background-color 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#495057'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#343a40'}
            >
              {language === "en" ? "English" : 
               language === "hi" ? "Hindi" : 
           
               "Language"}
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                color:'white',
                // backgroundColor: '#343a40', // Match the navbar color
                border: 'none',
                borderRadius: '0.25rem',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                minWidth: '150px',
                padding: '0.5rem 0'
              }}
            >
              <Dropdown.Item
                onClick={() => handleLanguageChange("en")}
                style={{
                   color: 'white',
                  fontSize: '0.875rem',
                  padding: '0.5rem 1rem',
                  transition: 'background-color 0.3s',
                  borderRadius: '0.25rem'
                }}
                // onMouseEnter={(e) => e.target.style.backgroundColor = '#495057'}
                // onMouseLeave={(e) => e.target.style.backgroundColor = '#343a40'}
              >
                English
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleLanguageChange("hi")}
                style={{
                  color: 'white',
                  fontSize: '0.875rem',
                  padding: '0.5rem 1rem',
                  transition: 'background-color 0.3s',
                  borderRadius: '0.25rem'
                }}
                // onMouseEnter={(e) => e.target.style.backgroundColor = '#495057'}
                // onMouseLeave={(e) => e.target.style.backgroundColor = '#343a40'}
              >
                Hindi
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleLanguageChange("or")}
                style={{
                  color: 'white',
                  fontSize: '0.875rem',
                  padding: '0.5rem 1rem',
                  transition: 'background-color 0.3s',
                  borderRadius: '0.25rem'
                }}
                // onMouseEnter={(e) => e.target.style.backgroundColor = '#495057'}
                // onMouseLeave={(e) => e.target.style.backgroundColor = '#343a40'}
              >
                Odia
              </Dropdown.Item>
              {/* Add more languages here if needed */}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
