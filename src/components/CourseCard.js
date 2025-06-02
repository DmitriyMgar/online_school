import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStar, FaUsers, FaClock, FaSignal } from 'react-icons/fa';

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: ${({ theme }) => theme.transition};
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 255, 0, 0.2);
    border-color: ${({ theme }) => theme.colors.primary};
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 180px;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 0) 50%);
  }
`;

const CourseImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image || '/images/courses/default.jpg'});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CourseTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const CourseDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  flex: 1;
`;

const CourseDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 0.5rem;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: rgba(0, 255, 0, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.3rem 0.8rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 0.8rem;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const ViewButton = styled(Link)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 0.9rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  text-decoration: none;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.backgroundDarker};
    text-decoration: none;
  }
`;

const CourseCard = ({ course }) => {
  return (
    <Card
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <ImageContainer>
        <CourseImage image={course.image} />
      </ImageContainer>
      <CardContent>
        <CourseTitle>
          <Link to={`/course/${course.id}`}>{course.title}</Link>
        </CourseTitle>
        <CourseDescription>
          {course.description}
        </CourseDescription>
        <TagsContainer>
          {course.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
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
        </CourseDetails>
        <CardFooter>
          <Price>{course.price} ₽</Price>
          <ViewButton to={`/course/${course.id}`}>Подробнее</ViewButton>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default CourseCard; 