import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaLaptopCode, FaUserSecret, FaRocket } from 'react-icons/fa';

// Стили
const PageContainer = styled(motion.div)`
  padding: 120px 2rem 2rem;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.backgroundDarker};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 255, 0, 0.3);
  }
`;

const MemberImage = styled.div`
  height: 200px;
  background-color: ${({ theme }) => theme.colors.backgroundDarker};
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
`;

const MemberName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const MemberBio = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  line-height: 1.5;
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.backgroundDarker};
  border-radius: ${({ theme }) => theme.borderRadius};
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

const FeatureText = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
    font-family: ${({ theme }) => theme.fonts.heading};
  }
  
  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.95rem;
  }
`;

// Анимации
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: { opacity: 0 }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const AboutPage = () => {
  return (
    <PageContainer
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <PageTitle>О нас</PageTitle>
      
      <Section as={motion.section} variants={itemVariants}>
        <SectionTitle><FaCode /> Наша миссия</SectionTitle>
        <AboutText>
          <strong>CoolXaker</strong> — это не просто онлайн-школа программирования, это сообщество единомышленников, 
          объединенных страстью к кодингу и технологиям. Мы создали уникальную образовательную платформу, 
          которая сочетает в себе глубокие знания, практический опыт и современные методики обучения.
        </AboutText>
        <AboutText>
          Наша миссия — сделать обучение программированию доступным, увлекательным и эффективным для каждого. 
          Мы верим, что технологические навыки — это ключ к успеху в современном мире, и стремимся помочь 
          нашим студентам раскрыть свой потенциал в IT-сфере.
        </AboutText>
      </Section>
      
      <Section as={motion.section} variants={itemVariants}>
        <SectionTitle><FaRocket /> Почему выбирают нас</SectionTitle>
        <FeaturesList>
          <FeatureItem>
            <FaLaptopCode />
            <FeatureText>
              <h4>Практический подход</h4>
              <p>Более 70% учебного времени посвящено практическим заданиям и проектам, которые можно добавить в портфолио.</p>
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FaGraduationCap />
            <FeatureText>
              <h4>Опытные преподаватели</h4>
              <p>Наши инструкторы — практикующие разработчики с опытом работы в ведущих IT-компаниях.</p>
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FaUserSecret />
            <FeatureText>
              <h4>Уникальный подход</h4>
              <p>Мы используем геймифицированный подход к обучению с хакерской эстетикой, что делает процесс обучения увлекательным.</p>
            </FeatureText>
          </FeatureItem>
        </FeaturesList>
      </Section>
      
      <Section as={motion.section} variants={itemVariants}>
        <SectionTitle><FaUserSecret /> Наша команда</SectionTitle>
        <AboutText>
          За CoolXaker стоит команда профессионалов, объединенных общей целью — создать лучшую платформу для обучения программированию.
        </AboutText>
        
        <TeamGrid>
          <TeamMember whileHover={{ y: -5 }} variants={itemVariants}>
            <MemberImage src="/images/team/alex.jpg" />
            <MemberInfo>
              <MemberName>Алексей Иванов</MemberName>
              <MemberRole>Основатель, Lead-разработчик</MemberRole>
              <MemberBio>10+ лет опыта в разработке. Работал в Яндекс и Google. Эксперт в Python и алгоритмах.</MemberBio>
            </MemberInfo>
          </TeamMember>
          
          <TeamMember whileHover={{ y: -5 }} variants={itemVariants}>
            <MemberImage src="/images/team/maria.jpg" />
            <MemberInfo>
              <MemberName>Мария Петрова</MemberName>
              <MemberRole>Веб-разработчик, Преподаватель</MemberRole>
              <MemberBio>Фронтенд-разработчик с опытом 7 лет. Специалист по React и современным веб-технологиям.</MemberBio>
            </MemberInfo>
          </TeamMember>
          
          <TeamMember whileHover={{ y: -5 }} variants={itemVariants}>
            <MemberImage src="/images/team/dmitry.jpg" />
            <MemberInfo>
              <MemberName>Дмитрий Смирнов</MemberName>
              <MemberRole>Специалист по кибербезопасности</MemberRole>
              <MemberBio>Этичный хакер с 8-летним опытом. Консультант по безопасности в крупных финтех-компаниях.</MemberBio>
            </MemberInfo>
          </TeamMember>
          
          <TeamMember whileHover={{ y: -5 }} variants={itemVariants}>
            <MemberImage src="/images/team/ekaterina.jpg" />
            <MemberInfo>
              <MemberName>Екатерина Новикова</MemberName>
              <MemberRole>Алгоритмист, Преподаватель</MemberRole>
              <MemberBio>PhD в Computer Science. Специалист по алгоритмам и структурам данных. 5+ лет преподавания.</MemberBio>
            </MemberInfo>
          </TeamMember>
        </TeamGrid>
      </Section>
    </PageContainer>
  );
};

export default AboutPage; 