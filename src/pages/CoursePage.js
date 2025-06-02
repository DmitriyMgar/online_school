import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaStar, 
  FaUsers, 
  FaClock, 
  FaSignal, 
  FaChalkboardTeacher, 
  FaLock, 
  FaCheck, 
  FaPlay,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

import { courses } from '../data/courses';

const CourseContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

const CourseHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundDarker};
  padding: 3rem 0;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
  
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
    opacity: 0.05;
    z-index: 0;
  }
`;

const CourseHeaderContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const CourseInfo = styled.div`
  flex: 1;
  min-width: 300px;
`;

const CourseTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const CourseDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CourseDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  background-color: rgba(0, 255, 0, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.3rem 0.8rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 0.9rem;
`;

const CourseAction = styled.div`
  flex: 0 0 350px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 1;
  }
`;

const CourseCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const CourseImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.image || '/images/courses/default.jpg'});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(26, 26, 26, 1) 0%, rgba(26, 26, 26, 0) 50%);
  }
`;

const CourseCardContent = styled.div`
  padding: 1.5rem;
`;

const CoursePrice = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const EnrollButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundDarker};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  margin-bottom: 1rem;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 255, 0, 0.3);
  }
`;

const CourseIncludes = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const IncludeItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 0.8rem;
  }
`;

const CourseContent = styled.div`
  margin-top: 3rem;
`;

const ContentTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
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

const ModulesList = styled.div`
  margin-bottom: 3rem;
`;

const ModuleItem = styled.div`
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
`;

const ModuleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundDarker};
  }
`;

const ModuleTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.8rem;
  }
`;

const ModuleContent = styled.div`
  padding: ${({ isOpen }) => (isOpen ? '1rem' : '0')};
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.colors.background};
`;

const LessonsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LessonItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBg};
  
  &:last-child {
    border-bottom: none;
  }
`;

const LessonInfo = styled.div`
  display: flex;
  align-items: center;
`;

const LessonIcon = styled.div`
  margin-right: 1rem;
  color: ${({ theme, completed }) => 
    completed ? theme.colors.primary : theme.colors.textSecondary};
`;

const LessonTitle = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

const LessonDuration = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [openModules, setOpenModules] = useState({});
  
  useEffect(() => {
    // Находим курс по id
    const foundCourse = courses.find(c => c.id === parseInt(id));
    if (foundCourse) {
      setCourse(foundCourse);
      
      // Инициализируем первый модуль как открытый
      const initialOpenModules = {};
      if (foundCourse.modules && foundCourse.modules.length > 0) {
        initialOpenModules[foundCourse.modules[0].id] = true;
      }
      setOpenModules(initialOpenModules);
    }
  }, [id]);
  
  const toggleModule = (moduleId) => {
    setOpenModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };
  
  if (!course) {
    return (
      <div className="container">
        <p>Курс не найден</p>
      </div>
    );
  }
  
  return (
    <CourseContainer>
      <CourseHeader>
        <div className="container">
          <CourseHeaderContent>
            <CourseInfo>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CourseTitle>{course.title}</CourseTitle>
                <CourseDescription>{course.description}</CourseDescription>
                
                <CourseDetails>
                  <Detail>
                    <FaStar /> {course.rating}
                  </Detail>
                  <Detail>
                    <FaUsers /> {course.students} студентов
                  </Detail>
                  <Detail>
                    <FaClock /> {course.duration}
                  </Detail>
                  <Detail>
                    <FaSignal /> {course.level}
                  </Detail>
                  <Detail>
                    <FaChalkboardTeacher /> {course.instructor}
                  </Detail>
                </CourseDetails>
                
                <TagsContainer>
                  {course.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagsContainer>
              </motion.div>
            </CourseInfo>
            
            <CourseAction>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CourseCard>
                  <CourseImage image={course.image} />
                  <CourseCardContent>
                    <CoursePrice>{course.price} ₽</CoursePrice>
                    <EnrollButton>Записаться на курс</EnrollButton>
                    <CourseIncludes>
                      <IncludeItem>
                        <FaPlay /> {course.modules.reduce((acc, module) => acc + module.lessons.length, 0)} видеоуроков
                      </IncludeItem>
                      <IncludeItem>
                        <FaClock /> {course.duration} обучения
                      </IncludeItem>
                      <IncludeItem>
                        <FaCheck /> Сертификат по окончании
                      </IncludeItem>
                      <IncludeItem>
                        <FaCheck /> Доступ навсегда
                      </IncludeItem>
                    </CourseIncludes>
                  </CourseCardContent>
                </CourseCard>
              </motion.div>
            </CourseAction>
          </CourseHeaderContent>
        </div>
      </CourseHeader>
      
      <div className="container">
        <CourseContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ContentTitle>Содержание курса</ContentTitle>
            
            <ModulesList>
              {course.modules.map((module) => (
                <ModuleItem key={module.id}>
                  <ModuleHeader onClick={() => toggleModule(module.id)}>
                    <ModuleTitle>
                      {openModules[module.id] ? <FaChevronUp /> : <FaChevronDown />} 
                      {module.title}
                    </ModuleTitle>
                    <span>{module.lessons.length} уроков</span>
                  </ModuleHeader>
                  
                  <ModuleContent isOpen={openModules[module.id]}>
                    <LessonsList>
                      {module.lessons.map((lesson) => (
                        <LessonItem key={lesson.id}>
                          <LessonInfo>
                            <LessonIcon completed={lesson.completed}>
                              {lesson.completed ? <FaCheck /> : <FaLock />}
                            </LessonIcon>
                            <LessonTitle>{lesson.title}</LessonTitle>
                          </LessonInfo>
                          <LessonDuration>{lesson.duration}</LessonDuration>
                        </LessonItem>
                      ))}
                    </LessonsList>
                  </ModuleContent>
                </ModuleItem>
              ))}
            </ModulesList>
          </motion.div>
        </CourseContent>
      </div>
    </CourseContainer>
  );
};

export default CoursePage; 