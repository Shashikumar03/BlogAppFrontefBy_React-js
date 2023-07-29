import React, { useEffect, useState } from "react";
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
  DropdownItem,
} from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { doLogout, getLoginUserDetail, isLogged } from "../auth";
import { toast } from "react-toastify";

export default function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    setLogin(isLogged());
    setUser(getLoginUserDetail());
  }, [login]);

  const logout = (event) => {
    event.preventDefault();
    doLogout(() => {
      setLogin(false);
      toast.success("Succesfully logout");
      navigate("/");
    });
  };

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar className="fixed-top px-5" color="light" light expand="md">
        <NavbarBrand>My blogs</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/services">
                Services
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/LinkedIn">
                  LinkedIn
                </DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav className="ms-auto px-5 " navbar>
            {login && (
              <>
                <NavItem>
                  <NavLink tag={Link}>{user.email}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} onClick={logout}>
                    Logout
                  </NavLink>
                </NavItem>
              </>
            )}
            {!login && (
              <>
                <NavItem>
                  <NavLink tag={Link} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/signup">
                    Signup
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
