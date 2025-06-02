import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaLaptopCode, FaShieldAlt, FaGraduationCap } from 'react-icons/fa';

import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const HeroSection = styled.section`
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.backgroundDarker};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(45deg, rgba(0, 255, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%),
      linear-gradient(135deg, rgba(0, 255, 255, 0.1) 10%, rgba(0, 0, 0, 0) 80%);
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/grid.png');
    opacity: 0.1;
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
  color: ${({ theme }) => theme.colors.textSecondary};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: fit-content;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundDarker};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  text-decoration: none;
  text-align: center;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 255, 0, 0.3);
    text-decoration: none;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  text-decoration: none;
  text-align: center;
  
  &:hover {
    background-color: rgba(0, 255, 0, 0.1);
    transform: translateY(-3px);
    text-decoration: none;
  }
`;

const CoursesSection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CoursesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeaturesSection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundDarker};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 255, 0, 0.2);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const CTASection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const HomePage = () => {
  // Анимация для элементов
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <>
      <HeroSection>
        <HeroContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroTitle 
              variants={itemVariants}
              className="glitch"
              data-text="CoolXaker"
            >
              CoolXaker
            </HeroTitle>
            <HeroSubtitle variants={itemVariants}>
              Онлайн-школа программирования с хакерским подходом к обучению. Изучайте программирование, веб-разработку и кибербезопасность.
            </HeroSubtitle>
            <HeroButtons variants={itemVariants}>
              <PrimaryButton to="/courses">Начать обучение</PrimaryButton>
              <SecondaryButton to="/about">О школе</SecondaryButton>
            </HeroButtons>
          </motion.div>
        </HeroContent>
      </HeroSection>
      
      <CoursesSection>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>Популярные курсы</SectionTitle>
          </motion.div>
          
          <CoursesList>
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </CoursesList>
        </div>
      </CoursesSection>
      
      <FeaturesSection>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <SectionTitle>Почему CoolXaker?</SectionTitle>
          </motion.div>
          
          <FeaturesGrid>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FeatureCard>
                <FeatureIcon>
                  <FaRocket />
                </FeatureIcon>
                <FeatureTitle>Быстрый старт</FeatureTitle>
                <FeatureDescription>
                  Начните программировать уже сегодня. Наши курсы разработаны для быстрого погружения в мир кода.
                </FeatureDescription>
              </FeatureCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FeatureCard>
                <FeatureIcon>
                  <FaLaptopCode />
                </FeatureIcon>
                <FeatureTitle>Практический подход</FeatureTitle>
                <FeatureDescription>
                  Больше практики, меньше теории. Вы будете писать код с первого занятия и решать реальные задачи.
                </FeatureDescription>
              </FeatureCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FeatureCard>
                <FeatureIcon>
                  <FaShieldAlt />
                </FeatureIcon>
                <FeatureTitle>Безопасность прежде всего</FeatureTitle>
                <FeatureDescription>
                  Учим не только программировать, но и защищать свой код. Основы кибербезопасности включены во все курсы.
                </FeatureDescription>
              </FeatureCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FeatureCard>
                <FeatureIcon>
                  <FaGraduationCap />
                </FeatureIcon>
                <FeatureTitle>Сертификация</FeatureTitle>
                <FeatureDescription>
                  Получите сертификат по окончании курса, который подтвердит ваши навыки и поможет в трудоустройстве.
                </FeatureDescription>
              </FeatureCard>
            </motion.div>
          </FeaturesGrid>
        </div>
      </FeaturesSection>
      
      <CTASection>
        <CTAContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CTATitle>Готовы начать свой путь в программирование?</CTATitle>
            <CTADescription>
              Присоединяйтесь к сообществу CoolXaker и получите доступ к лучшим курсам по программированию, веб-разработке и кибербезопасности.
            </CTADescription>
            <PrimaryButton to="/courses">Выбрать курс</PrimaryButton>
          </motion.div>
        </CTAContainer>
      </CTASection>
    </>
  );
};

export default HomePage; 