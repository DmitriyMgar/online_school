import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUserSecret, FaCode, FaBars, FaTimes } from 'react-icons/fa';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.sizes.headerHeight};
  background-color: ${({ theme }) => theme.colors.backgroundDarker};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 2px 10px rgba(0, 255, 0, 0.2);
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: none;
  }
  
  svg {
    margin-right: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: ${({ theme }) => theme.sizes.headerHeight};
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 250px;
    height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});
    background-color: ${({ theme }) => theme.colors.backgroundDarker};
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    transition: right 0.3s ease;
    border-left: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

const NavItem = styled(motion.div)`
  margin: 0 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1rem 0;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.text)};
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: ${({ theme }) => theme.transition};
  border: 1px solid ${({ theme, active }) => (active ? theme.colors.primary : 'transparent')};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    width: 100%;
  }
`;

const ProfileButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 1rem;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Закрываем меню при изменении маршрута
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <StyledHeader>
      <Logo to="/">
        <FaCode /> CoolXaker
      </Logo>
      
      <MenuToggle onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuToggle>
      
      <Nav isOpen={isOpen}>
        <NavItem
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavLink to="/" active={location.pathname === '/' ? 1 : 0}>
            Главная
          </NavLink>
        </NavItem>
        <NavItem
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavLink to="/courses" active={location.pathname.includes('/courses') ? 1 : 0}>
            Курсы
          </NavLink>
        </NavItem>
        <NavItem
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavLink to="/about" active={location.pathname === '/about' ? 1 : 0}>
            О нас
          </NavLink>
        </NavItem>
        <ProfileButton to="/profile" title="Профиль">
          <FaUserSecret />
        </ProfileButton>
      </Nav>
    </StyledHeader>
  );
};

export default Header; 