import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
// import './styles.css'; // Assuming you have a CSS file for styles
import logo from './images/Logo.jpg'; // Import your logo image
import homeLogo from './images/home.png'; // Import logo for Home
import dashboardLogo from './images/dashboard .png'; // Import logo for Dashboard
import aboutLogo from './images/about.png'; // Import logo for About
import communityLogo from './images/community.png'; // Import logo for Community
import helpLogo from './images/help.png'; // Import logo for Help
import investLogo from './images/invest.png'; // Import logo for Help

function Navbar() {
  return (
    <div style={{ height: '100vh', width: '180px', backgroundColor: '#f8f9fa'}}>
          <img
              src={logo} 
              alt="Logo" 
              style={{ width: '70px', height: '60px', marginBottom: '20px', borderRadius:'50%', marginLeft:'21px', marginTop:'30px'}} // Adjust size as needed
           />
      <Nav className="flex-column p-3">
              <Nav.Link as={Link} to="/home" className="mb-2 text-black">
                  <img src={homeLogo} alt="Home" style={{ height:'25px',width: '25px', marginRight: '10px' }} />Home
                </Nav.Link>
              <Nav.Link as={Link} to="/dashboard" className="mb-2 text-black">
                  <img src={dashboardLogo} alt="Dashboard" style={{ height:'28px',width: '28px', marginRight: '9px', marginLeft:'-1px' }} />Dashboard
                </Nav.Link>
              <Nav.Link as={Link} to="/about" className="mb-2 text-black">
                  <img src={aboutLogo} alt="About" style={{ height: '28px', width: '28px', marginRight: '10px', marginLeft: '1px' }} />About
              </Nav.Link>
              <Nav.Link as={Link} to="/invest" className="mb-2 text-black">
                  <img src={investLogo} alt="About" style={{ height: '28px', width: '28px', marginRight: '10px', marginLeft: '1px' }} />Invest
              </Nav.Link>
              
        <h5 style={{marginLeft:'15px'}}>Support</h5>      
              <Nav.Link as={Link} to="/community" className="mb-2 text-black">
                  <img src={communityLogo} alt="Home" style={{ height: '19px', width: '19px', marginRight: '10px',marginLeft: '5px'  }} />Community
              </Nav.Link>
              <Nav.Link as={Link} to="/help" className="mb-2 text-black">
                  <img src={helpLogo} alt="Home" style={{ height: '28px', width: '28px', marginRight: '10px' }} />Help
              </Nav.Link>
      </Nav>
    </div>
  );
}

export default Navbar;
