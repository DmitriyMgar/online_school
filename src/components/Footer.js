import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTelegram, FaDiscord, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundDarker};
  color: ${({ theme }) => theme.colors.text};
  padding: 2rem 0;
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  margin-bottom: 1.5rem;
  min-width: 200px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 2rem;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const FooterLink = styled(Link)`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBg};
  width: 100%;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterSection>
          <FooterTitle>
            <FaCode /> CoolXaker
          </FooterTitle>
          <p>Современная онлайн-школа программирования с хакерским подходом к обучению.</p>
          <SocialLinks>
            <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://t.me" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </SocialLink>
            <SocialLink href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <FaDiscord />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Навигация</FooterTitle>
          <FooterLink to="/">Главная</FooterLink>
          <FooterLink to="/courses">Курсы</FooterLink>
          <FooterLink to="/about">О нас</FooterLink>
          <FooterLink to="/profile">Профиль</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Курсы</FooterTitle>
          <FooterLink to="/course/1">Основы программирования</FooterLink>
          <FooterLink to="/course/2">Веб-разработка</FooterLink>
          <FooterLink to="/course/3">Кибербезопасность</FooterLink>
          <FooterLink to="/course/4">Алгоритмы и структуры данных</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Контакты</FooterTitle>
          <p>Email: info@coolxaker.com</p>
          <p>Телефон: +7 (999) 123-45-67</p>
          <p>Адрес: г. Москва, ул. Хакерская, д. 42</p>
        </FooterSection>
        
        <Copyright>
          &copy; {currentYear} CoolXaker. Все права защищены.
        </Copyright>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer; 