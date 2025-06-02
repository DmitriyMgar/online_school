import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaUser, 
  FaGithub, 
  FaTelegram, 
  FaDiscord, 
  FaEdit, 
  FaCog, 
  FaChartLine, 
  FaTrophy, 
  FaCalendarAlt, 
  FaClock,
  FaCheckCircle
} from 'react-icons/fa';

import { userData } from '../data/user';
import { courses } from '../data/courses';

const ProfileContainer = styled.div`
  padding: 2rem 0;
`;

const ProfileHeader = styled.div`
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
`;

const ProfileHeaderContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

const AvatarContainer = styled.div`
  position: relative;
`;

const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url(${props => props.image || '/images/default-avatar.jpg'});
  background-size: cover;
  background-position: center;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
`;

const EditButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundDarker};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: scale(1.1);
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Username = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

const Bio = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  max-width: 600px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
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

const ProfileTabs = styled.div`
  margin-bottom: 2rem;
`;

const TabsNav = styled.div`
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBg};
  margin-bottom: 2rem;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 5px;
  }
`;

const TabButton = styled.button`
  padding: 1rem 2rem;
  background-color: transparent;
  border: none;
  color: ${({ theme, active }) => 
    active ? theme.colors.primary : theme.colors.textSecondary};
  font-size: 1rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  position: relative;
  white-space: nowrap;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme, active }) => 
      active ? theme.colors.primary : 'transparent'};
    transition: ${({ theme }) => theme.transition};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TabContent = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const StatCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1.5rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 255, 0, 0.2);
  }
`;

const StatIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CoursesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const CourseCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 255, 0, 0.2);
  }
`;

const CourseImage = styled.div`
  height: 150px;
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

const CourseContent = styled.div`
  padding: 1.5rem;
`;

const CourseTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const CourseProgress = styled.div`
  margin-bottom: 1rem;
`;

const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ProgressBar = styled.div`
  height: 8px;
  background-color: ${({ theme }) => theme.colors.backgroundDarker};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${props => props.progress}%;
  transition: width 0.5s ease;
`;

const CourseDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const AchievementsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const AchievementCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: ${({ theme }) => theme.transition};
  display: flex;
  align-items: center;
  gap: 1rem;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 255, 0, 0.2);
  }
`;

const AchievementIcon = styled.div`
  font-size: 2rem;
`;

const AchievementInfo = styled.div`
  flex: 1;
`;

const AchievementTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const AchievementDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.5rem;
`;

const AchievementDate = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.3rem;
  }
`;

const SettingsForm = styled.form`
  max-width: 600px;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 255, 0, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 255, 0, 0.2);
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const FormCheckbox = styled.input`
  margin-right: 0.5rem;
  cursor: pointer;
`;

const SaveButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundDarker};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 255, 0, 0.3);
  }
`;

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [formData, setFormData] = useState({
    name: userData.name,
    username: userData.username,
    email: userData.email,
    bio: userData.bio,
    github: userData.socialLinks.github,
    telegram: userData.socialLinks.telegram,
    discord: userData.socialLinks.discord,
    notifications: {
      email: userData.preferences.notifications.email,
      browser: userData.preferences.notifications.browser
    }
  });
  
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        notifications: {
          ...prev.notifications,
          [name]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика сохранения данных
    console.log('Сохранено:', formData);
  };
  
  // Находим полные данные о курсах пользователя
  const userCourses = userData.enrolledCourses.map(userCourse => {
    const fullCourse = courses.find(c => c.id === userCourse.id);
    return {
      ...fullCourse,
      progress: userCourse.progress,
      startDate: userCourse.startDate,
      lastActivity: userCourse.lastActivity
    };
  });
  
  return (
    <ProfileContainer>
      <ProfileHeader>
        <div className="container">
          <ProfileHeaderContent>
            <AvatarContainer>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Avatar image={userData.avatar} />
                <EditButton>
                  <FaEdit />
                </EditButton>
              </motion.div>
            </AvatarContainer>
            
            <ProfileInfo>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Username>{userData.username}</Username>
                <Name>{userData.name}</Name>
                <Bio>{userData.bio}</Bio>
                
                <SocialLinks>
                  <SocialLink href={userData.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </SocialLink>
                  <SocialLink href={userData.socialLinks.telegram} target="_blank" rel="noopener noreferrer">
                    <FaTelegram />
                  </SocialLink>
                  <SocialLink href={userData.socialLinks.discord} target="_blank" rel="noopener noreferrer">
                    <FaDiscord />
                  </SocialLink>
                </SocialLinks>
              </motion.div>
            </ProfileInfo>
          </ProfileHeaderContent>
        </div>
      </ProfileHeader>
      
      <div className="container">
        <ProfileTabs>
          <TabsNav>
            <TabButton 
              active={activeTab === 'courses'} 
              onClick={() => setActiveTab('courses')}
            >
              <FaChartLine /> Мои курсы
            </TabButton>
            <TabButton 
              active={activeTab === 'achievements'} 
              onClick={() => setActiveTab('achievements')}
            >
              <FaTrophy /> Достижения
            </TabButton>
            <TabButton 
              active={activeTab === 'settings'} 
              onClick={() => setActiveTab('settings')}
            >
              <FaCog /> Настройки
            </TabButton>
          </TabsNav>
          
          <TabContent active={activeTab === 'courses'}>
            <StatsGrid>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <StatCard>
                  <StatIcon>
                    <FaCheckCircle />
                  </StatIcon>
                  <StatValue>{userData.stats.totalLessonsCompleted}</StatValue>
                  <StatLabel>Завершенных уроков</StatLabel>
                </StatCard>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <StatCard>
                  <StatIcon>
                    <FaClock />
                  </StatIcon>
                  <StatValue>{userData.stats.totalHoursLearned}</StatValue>
                  <StatLabel>Часов обучения</StatLabel>
                </StatCard>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <StatCard>
                  <StatIcon>
                    <FaChartLine />
                  </StatIcon>
                  <StatValue>{userData.stats.averageScore}</StatValue>
                  <StatLabel>Средний балл</StatLabel>
                </StatCard>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <StatCard>
                  <StatIcon>
                    <FaCalendarAlt />
                  </StatIcon>
                  <StatValue>{userData.stats.streak}</StatValue>
                  <StatLabel>Дней подряд</StatLabel>
                </StatCard>
              </motion.div>
            </StatsGrid>
            
            <SectionTitle>Мои курсы</SectionTitle>
            <CoursesList>
              {userCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <CourseCard>
                    <CourseImage image={course.image} />
                    <CourseContent>
                      <CourseTitle>
                        <Link to={`/course/${course.id}`}>{course.title}</Link>
                      </CourseTitle>
                      <CourseProgress>
                        <ProgressText>
                          <span>Прогресс</span>
                          <span>{course.progress}%</span>
                        </ProgressText>
                        <ProgressBar>
                          <ProgressFill progress={course.progress} />
                        </ProgressBar>
                      </CourseProgress>
                      <CourseDetails>
                        <span>Начат: {course.startDate}</span>
                        <span>Последняя активность: {course.lastActivity}</span>
                      </CourseDetails>
                    </CourseContent>
                  </CourseCard>
                </motion.div>
              ))}
            </CoursesList>
          </TabContent>
          
          <TabContent active={activeTab === 'achievements'}>
            <SectionTitle>Мои достижения</SectionTitle>
            <AchievementsList>
              {userData.achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <AchievementCard>
                    <AchievementIcon>{achievement.icon}</AchievementIcon>
                    <AchievementInfo>
                      <AchievementTitle>{achievement.title}</AchievementTitle>
                      <AchievementDescription>{achievement.description}</AchievementDescription>
                      <AchievementDate>
                        <FaCalendarAlt /> {achievement.earnedAt}
                      </AchievementDate>
                    </AchievementInfo>
                  </AchievementCard>
                </motion.div>
              ))}
            </AchievementsList>
          </TabContent>
          
          <TabContent active={activeTab === 'settings'}>
            <SectionTitle>Настройки профиля</SectionTitle>
            <SettingsForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>Имя</FormLabel>
                <FormInput 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleFormChange} 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Имя пользователя</FormLabel>
                <FormInput 
                  type="text" 
                  name="username" 
                  value={formData.username} 
                  onChange={handleFormChange} 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormInput 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleFormChange} 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>О себе</FormLabel>
                <FormTextarea 
                  name="bio" 
                  value={formData.bio} 
                  onChange={handleFormChange} 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>GitHub</FormLabel>
                <FormInput 
                  type="text" 
                  name="github" 
                  value={formData.github} 
                  onChange={handleFormChange} 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Telegram</FormLabel>
                <FormInput 
                  type="text" 
                  name="telegram" 
                  value={formData.telegram} 
                  onChange={handleFormChange} 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Discord</FormLabel>
                <FormInput 
                  type="text" 
                  name="discord" 
                  value={formData.discord} 
                  onChange={handleFormChange} 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Уведомления</FormLabel>
                <CheckboxGroup>
                  <FormCheckbox 
                    type="checkbox" 
                    name="email" 
                    checked={formData.notifications.email} 
                    onChange={handleFormChange} 
                  />
                  <span>Email уведомления</span>
                </CheckboxGroup>
                <CheckboxGroup>
                  <FormCheckbox 
                    type="checkbox" 
                    name="browser" 
                    checked={formData.notifications.browser} 
                    onChange={handleFormChange} 
                  />
                  <span>Браузерные уведомления</span>
                </CheckboxGroup>
              </FormGroup>
              
              <SaveButton type="submit">Сохранить изменения</SaveButton>
            </SettingsForm>
          </TabContent>
        </ProfileTabs>
      </div>
    </ProfileContainer>
  );
};

export default ProfilePage; 
