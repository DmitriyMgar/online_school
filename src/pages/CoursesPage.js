import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFilter, FaSearch } from 'react-icons/fa';

// Импорт данных курсов
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

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

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const SearchInput = styled.div`
  flex: 1;
  min-width: 250px;
  position: relative;
  
  input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.backgroundDarker};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
    }
  }
  
  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FilterSelect = styled.select`
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.backgroundDarker};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  min-width: 150px;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
  
  option {
    background-color: ${({ theme }) => theme.colors.backgroundDarker};
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  grid-column: 1 / -1;
  border: 1px dashed ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
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

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  
  // Фильтрация курсов
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLevel = levelFilter === '' || course.level === levelFilter;
    
    return matchesSearch && matchesLevel;
  });
  
  return (
    <PageContainer
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <PageTitle>Наши курсы</PageTitle>
      
      <FiltersContainer>
        <SearchInput>
          <FaSearch />
          <input 
            type="text" 
            placeholder="Поиск курсов..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchInput>
        
        <FilterSelect 
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
        >
          <option value="">Все уровни</option>
          <option value="Начинающий">Начинающий</option>
          <option value="Средний">Средний</option>
          <option value="Продвинутый">Продвинутый</option>
        </FilterSelect>
      </FiltersContainer>
      
      <CoursesGrid>
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <NoResults>
            <h3>Курсы не найдены</h3>
            <p>Попробуйте изменить параметры поиска</p>
          </NoResults>
        )}
      </CoursesGrid>
    </PageContainer>
  );
};

export default CoursesPage; 