// Скрипт для проверки готовности проекта к деплою на Netlify
const fs = require('fs');
const path = require('path');

console.log('Проверка готовности проекта CoolXaker к деплою на Netlify...');

// Проверка наличия необходимых файлов
const requiredFiles = [
  'netlify.toml',
  'public/_redirects',
  'public/index.html',
  'public/manifest.json',
  'package.json'
];

// Функция для проверки наличия файла
function checkFile(filePath) {
  try {
    fs.accessSync(filePath, fs.constants.F_OK);
    console.log(`✅ Файл ${filePath} найден`);
    return true;
  } catch (err) {
    console.error(`❌ Файл ${filePath} не найден`);
    return false;
  }
}

// Проверка файла netlify.toml на правильность содержимого
function checkNetlifyToml() {
  try {
    const content = fs.readFileSync('netlify.toml', 'utf-8');
    if (content.includes('[build]') && content.includes('[[redirects]]')) {
      console.log('✅ Файл netlify.toml содержит необходимые настройки');
      return true;
    } else {
      console.error('❌ Файл netlify.toml не содержит необходимых настроек');
      return false;
    }
  } catch (err) {
    console.error('❌ Не удалось прочитать файл netlify.toml');
    return false;
  }
}

// Проверка наличия всех файлов
let allFilesExist = true;
for (const file of requiredFiles) {
  if (!checkFile(file)) {
    allFilesExist = false;
  }
}

// Проверка содержимого netlify.toml
const netlifyTomlCorrect = checkNetlifyToml();

// Проверка настроек сборки в package.json
function checkPackageJson() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    if (packageJson.scripts && packageJson.scripts.build === 'react-scripts build') {
      console.log('✅ Настройки сборки в package.json корректны');
      return true;
    } else {
      console.error('❌ Настройки сборки в package.json некорректны');
      return false;
    }
  } catch (err) {
    console.error('❌ Не удалось прочитать файл package.json');
    return false;
  }
}

// Проверка package.json
const packageJsonCorrect = checkPackageJson();

// Итоговый результат проверки
if (allFilesExist && netlifyTomlCorrect && packageJsonCorrect) {
  console.log('\n✅✅✅ Проект готов к деплою на Netlify!');
  console.log('Рекомендуемые шаги:');
  console.log('1. Загрузите проект на GitHub');
  console.log('2. Войдите в Netlify и создайте новый проект из репозитория GitHub');
  console.log('3. Netlify автоматически определит настройки сборки из netlify.toml');
  console.log('4. После деплоя вы получите URL вашего сайта');
} else {
  console.log('\n❌❌❌ Проект не готов к деплою на Netlify. Исправьте указанные ошибки.');
} 