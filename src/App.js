import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

// Компоненты
import Header from './components/Header';
import Footer from './components/Footer';

// Страницы
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

// Темы и стили
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="app">
        <Header />
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/course/:id" element={<CoursePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 