import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 1rem;
  min-height: 60vh;
`;

const ErrorCode = styled(motion.h1)`
  font-size: 8rem;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const ErrorDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
  max-width: 600px;
`;

const HomeButton = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundDarker};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  text-decoration: none;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 255, 0, 0.3);
    text-decoration: none;
  }
`;

const GlitchIcon = styled(motion.div)`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <GlitchIcon
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FaExclamationTriangle />
      </GlitchIcon>
      
      <ErrorCode
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glitch"
        data-text="404"
      >
        404
      </ErrorCode>
      
      <ErrorTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Страница не найдена
      </ErrorTitle>
      
      <ErrorDescription
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Похоже, вы пытаетесь получить доступ к странице, которая была удалена или никогда не существовала.
      </ErrorDescription>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <HomeButton to="/">
          <FaHome /> Вернуться на главную
        </HomeButton>
      </motion.div>
    </NotFoundContainer>
  );
};

export default NotFoundPage; 