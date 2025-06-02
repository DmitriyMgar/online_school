export const userData = {
  id: 1,
  username: "xaker2023",
  name: "Иван Петров",
  email: "ivan@example.com",
  avatar: "/images/avatar.jpg",
  role: "student",
  registeredAt: "2023-01-15",
  lastLogin: "2023-06-10",
  bio: "Начинающий программист, интересуюсь веб-разработкой и кибербезопасностью.",
  socialLinks: {
    github: "https://github.com/xaker2023",
    telegram: "https://t.me/xaker2023",
    discord: "xaker2023#1234"
  },
  enrolledCourses: [
    {
      id: 1,
      title: "Основы программирования",
      progress: 15,
      startDate: "2023-02-01",
      lastActivity: "2023-06-08",
      completed: false
    },
    {
      id: 3,
      title: "Кибербезопасность",
      progress: 5,
      startDate: "2023-05-15",
      lastActivity: "2023-06-10",
      completed: false
    }
  ],
  achievements: [
    {
      id: 1,
      title: "Первые шаги",
      description: "Зарегистрировался и заполнил профиль",
      icon: "🏆",
      earnedAt: "2023-01-15"
    },
    {
      id: 2,
      title: "Начинающий кодер",
      description: "Завершил первый урок по программированию",
      icon: "💻",
      earnedAt: "2023-02-03"
    }
  ],
  stats: {
    totalLessonsCompleted: 5,
    totalHoursLearned: 12,
    averageScore: 85,
    streak: 3
  },
  preferences: {
    notifications: {
      email: true,
      browser: true
    },
    theme: "dark",
    language: "ru"
  }
}; 