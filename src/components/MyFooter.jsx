import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
     DropdownItem } from 'reactstrap';


class MyFooter extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="bottom" >
        <NavbarBrand href="/">MyBookStore</NavbarBrand>
       
        
      </Navbar>
    </div>
    );
  }
}

export default MyFooter;



