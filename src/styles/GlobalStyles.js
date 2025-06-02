import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transition};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  button {
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    padding: 8px 16px;
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main-content {
    flex: 1;
    padding-top: ${({ theme }) => theme.sizes.headerHeight};
    padding-bottom: 2rem;
  }

  .container {
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.maxWidth};
    margin: 0 auto;
    padding: 0 1rem;
  }

  .section {
    padding: 2rem 0;
  }

  /* Анимация для текста в стиле терминала */
  .terminal-text {
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid ${({ theme }) => theme.colors.primary};
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  }

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: ${({ theme }) => theme.colors.primary} }
  }

  /* Стили для скроллбара */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundDarker};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  /* Эффект сканирования для элементов */
  .scan-effect {
    position: relative;
    overflow: hidden;
  }

  .scan-effect::before {
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(
      to bottom,
      transparent,
      ${({ theme }) => theme.colors.primary},
      transparent
    );
    animation: scan 2s linear infinite;
  }

  @keyframes scan {
    0% {
      top: -10px;
    }
    100% {
      top: 100%;
    }
  }

  /* Эффект глюка для текста */
  .glitch {
    position: relative;
  }

  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .glitch::before {
    left: 2px;
    text-shadow: -1px 0 ${({ theme }) => theme.colors.secondary};
    animation: glitch-animation 2s infinite linear alternate-reverse;
  }

  .glitch::after {
    left: -2px;
    text-shadow: 1px 0 ${({ theme }) => theme.colors.accent};
    animation: glitch-animation 3s infinite linear alternate-reverse;
  }

  @keyframes glitch-animation {
    0% {
      clip-path: inset(30% 0 68% 0);
    }
    20% {
      clip-path: inset(52% 0 30% 0);
    }
    40% {
      clip-path: inset(43% 0 1% 0);
    }
    60% {
      clip-path: inset(25% 0 58% 0);
    }
    80% {
      clip-path: inset(75% 0 5% 0);
    }
    100% {
      clip-path: inset(10% 0 58% 0);
    }
  }
`;

export default GlobalStyles; 