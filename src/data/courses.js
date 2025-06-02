export const courses = [
  {
    id: 1,
    title: "Основы программирования",
    description: "Базовый курс для начинающих программистов. Изучение основных концепций и принципов программирования.",
    image: "/images/courses/programming-basics.jpg",
    level: "Начинающий",
    duration: "8 недель",
    price: 12000,
    rating: 4.8,
    students: 1245,
    instructor: "Алексей Иванов",
    tags: ["Python", "Алгоритмы", "Логика"],
    modules: [
      {
        id: 1,
        title: "Введение в программирование",
        lessons: [
          { id: 1, title: "Что такое программирование", duration: "45 мин", completed: true },
          { id: 2, title: "Установка среды разработки", duration: "30 мин", completed: true },
          { id: 3, title: "Первая программа", duration: "60 мин", completed: false }
        ]
      },
      {
        id: 2,
        title: "Переменные и типы данных",
        lessons: [
          { id: 4, title: "Что такое переменные", duration: "45 мин", completed: false },
          { id: 5, title: "Числа и строки", duration: "50 мин", completed: false },
          { id: 6, title: "Списки и словари", duration: "60 мин", completed: false }
        ]
      },
      {
        id: 3,
        title: "Условные операторы и циклы",
        lessons: [
          { id: 7, title: "Условия if-else", duration: "55 мин", completed: false },
          { id: 8, title: "Циклы for и while", duration: "60 мин", completed: false },
          { id: 9, title: "Практические задачи", duration: "90 мин", completed: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Веб-разработка",
    description: "Полный курс по созданию современных веб-приложений с использованием HTML, CSS, JavaScript и React.",
    image: "/images/courses/web-dev.jpg",
    level: "Средний",
    duration: "12 недель",
    price: 18000,
    rating: 4.9,
    students: 876,
    instructor: "Мария Петрова",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    modules: [
      {
        id: 1,
        title: "Основы HTML и CSS",
        lessons: [
          { id: 1, title: "Структура HTML документа", duration: "40 мин", completed: false },
          { id: 2, title: "CSS селекторы и свойства", duration: "55 мин", completed: false },
          { id: 3, title: "Flexbox и Grid", duration: "70 мин", completed: false }
        ]
      },
      {
        id: 2,
        title: "JavaScript основы",
        lessons: [
          { id: 4, title: "Переменные и типы данных", duration: "50 мин", completed: false },
          { id: 5, title: "Функции и события", duration: "60 мин", completed: false },
          { id: 6, title: "DOM манипуляции", duration: "65 мин", completed: false }
        ]
      },
      {
        id: 3,
        title: "Введение в React",
        lessons: [
          { id: 7, title: "Компоненты и пропсы", duration: "60 мин", completed: false },
          { id: 8, title: "Состояние и жизненный цикл", duration: "70 мин", completed: false },
          { id: 9, title: "Хуки в React", duration: "75 мин", completed: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Кибербезопасность",
    description: "Курс по основам кибербезопасности, включая защиту систем, этичный хакинг и анализ уязвимостей.",
    image: "/images/courses/cybersecurity.jpg",
    level: "Продвинутый",
    duration: "10 недель",
    price: 22000,
    rating: 4.7,
    students: 543,
    instructor: "Дмитрий Смирнов",
    tags: ["Безопасность", "Этичный хакинг", "Сети"],
    modules: [
      {
        id: 1,
        title: "Основы информационной безопасности",
        lessons: [
          { id: 1, title: "Принципы кибербезопасности", duration: "50 мин", completed: false },
          { id: 2, title: "Типы угроз и атак", duration: "65 мин", completed: false },
          { id: 3, title: "Защита периметра", duration: "60 мин", completed: false }
        ]
      },
      {
        id: 2,
        title: "Этичный хакинг",
        lessons: [
          { id: 4, title: "Сканирование сети", duration: "70 мин", completed: false },
          { id: 5, title: "Поиск уязвимостей", duration: "75 мин", completed: false },
          { id: 6, title: "Эксплуатация уязвимостей", duration: "80 мин", completed: false }
        ]
      },
      {
        id: 3,
        title: "Защита систем",
        lessons: [
          { id: 7, title: "Настройка файрвола", duration: "55 мин", completed: false },
          { id: 8, title: "Системы обнаружения вторжений", duration: "65 мин", completed: false },
          { id: 9, title: "Шифрование данных", duration: "60 мин", completed: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Алгоритмы и структуры данных",
    description: "Углубленное изучение алгоритмов и структур данных для эффективного программирования.",
    image: "/images/courses/algorithms.jpg",
    level: "Средний",
    duration: "9 недель",
    price: 16000,
    rating: 4.6,
    students: 721,
    instructor: "Екатерина Новикова",
    tags: ["Алгоритмы", "Структуры данных", "Оптимизация"],
    modules: [
      {
        id: 1,
        title: "Базовые структуры данных",
        lessons: [
          { id: 1, title: "Массивы и связанные списки", duration: "55 мин", completed: false },
          { id: 2, title: "Стеки и очереди", duration: "50 мин", completed: false },
          { id: 3, title: "Деревья и графы", duration: "70 мин", completed: false }
        ]
      },
      {
        id: 2,
        title: "Алгоритмы сортировки",
        lessons: [
          { id: 4, title: "Пузырьковая сортировка", duration: "45 мин", completed: false },
          { id: 5, title: "Быстрая сортировка", duration: "60 мин", completed: false },
          { id: 6, title: "Сортировка слиянием", duration: "55 мин", completed: false }
        ]
      },
      {
        id: 3,
        title: "Алгоритмы поиска",
        lessons: [
          { id: 7, title: "Линейный и бинарный поиск", duration: "50 мин", completed: false },
          { id: 8, title: "Поиск в глубину и ширину", duration: "65 мин", completed: false },
          { id: 9, title: "Алгоритм Дейкстры", duration: "75 мин", completed: false }
        ]
      }
    ]
  }
]; 