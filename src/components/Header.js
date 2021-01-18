import React from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
  Collapse
} from "shards-react";
import "../styling/Header.css";


export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapseOpen: false
    };
  }

  

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar type="dark" theme="primary" expand="md">
        <div className= "header-centre">
        
        
        <NavbarBrand href="#">Shoppies</NavbarBrand>
        
        <NavbarToggler onClick={this.toggleNavbar} />
        

        <Collapse open={this.state.collapseOpen} navbar>
          
          <Nav navbar>
            <NavItem>
            <NavLink active href="#">
            Movie Awards For Entrepreneurs
              </NavLink>
              
            </NavItem>
           
          </Nav>
          
        </Collapse>
        </div>
      </Navbar>
    );
  }
}
