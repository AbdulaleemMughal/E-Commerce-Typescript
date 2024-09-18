import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { fetchCategoryData } from '../Typescript/Function';
import { ProductCategories } from '../Typescript/Header.Interface';
import { Badge } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/appStore';

type HeaderProps = {
    iconStyle: React.CSSProperties;
};

const Header = ({ iconStyle }: HeaderProps) => {
    const [ category, setCategory] = useState<ProductCategories[]>([]);
    const store = useSelector((store: RootState) => store.favourite.items);
    const cartStore = useSelector((store: RootState) => store.cart.cart);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategory();
    }, []);

    const fetchCategory = async () => {
        const response = await fetchCategoryData('https://fakestoreapi.com/products/categories');
        setCategory(response);
    };

    const handleCategory = (category: string) => {
      const formattedCategory = category.replace(/\s+/g, '-').toLowerCase();
      navigate(`/category/${formattedCategory}`);
    };

    return (
      <Navbar expand="lg" sticky='top' style={{backgroundColor: '#fffeee'}}>
        <Container>
          <Navbar.Brand as={NavLink} to="/" className='fs-2 fw-bold'>Shopingo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
              <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                {category.map((c, index) => (
                  <NavDropdown.Item key={index} onClick={() => handleCategory(c)}>
                    {c}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/favourite">
                <Badge count={store.length} overflowCount={10}>
                  <FaRegHeart style={iconStyle} />
                </Badge>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cart">
                <Badge count={cartStore.length} overflowCount={10}>
                  <FiShoppingCart style={iconStyle} />
                </Badge>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/">
                <FaUserCircle style={iconStyle} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;
