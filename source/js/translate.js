
// Объект с переводами на разные языки
var translations = {
  en: {
    aboutus: "About us",
    сommissions: "Commissions",
    brands: "Brands",
    news: "News",
    contactus: "Contact us",
    careers: "Careers",
    login: "Log in",
    signup: "Sign up",
    hog: "House of Gambling",
    advertiser: "Raise your roi with direct advertiser",
    partner: "Become a Partner",
    payment: "Payment methods: Skrill, Neteller, Webmoney, bank transfer.",
    terms: "Terms",
    guide: "Brand Guide",
    social: "Our Social Media"
    // Добавьте другие переводы на английский
  },
  ru: {
    aboutus: "О нас",
    сommissions: "Комиссии",
    brands: "Бренды",
    news: "Новости",
    contactus: "Контакты",
    careers: "Карьера",
    login: "Войти",
    signup: "Регистрация",
    hog: "Дом Гемблинга",
    advertiser: "Повышение доходности с помощью прямого рекламодателя",
    partner: "Стать партнёром",
    payment: "Способы оплаты: Skrill, Neteller, Webmoney, банковский перевод.",
    terms: "Условия",
    guide: "Руководство по бренду",
    social: "Наши соц сети"

    // Добавьте переводы на русский
  },
  de: {
    aboutus: "Über uns",
    сommissions: "Provisionen",
    brands: "Marken",
    news: "Nachrichten",
    contactus: "Kontaktiere uns",
    careers: "Karriere",
    login: "Anmelden",
    signup: "Registrieren",
    hog: "Haus der Spiele",
    advertiser: "Steigern Sie Ihre Einnahmen mit Direktwerbung",
    partner: "Werden Sie Partner",
    payment: "Zahlungsmethoden: Skrill, Neteller, Webmoney, Überweisung.",
    terms: "Bedingungen",
    guide: "Markenleitfaden",
    social: "Unsere sozialen Medien"
    // Добавьте переводы на немецкий
    // Добавьте переводы на немецкий
  }
  // Добавьте другие языки и их переводы
};

// Функция для выбора языка
function selectWord(language) {
  // Получаем все элементы, которые нужно перевести
  var elementsToTranslate = document.querySelectorAll(".translate");

  // Проходимся по каждому элементу
  elementsToTranslate.forEach(function (element) {
    var key = element.getAttribute("data-key"); // Получаем ключ перевода
    var originalText = element.getAttribute("data-original-text"); // Получаем оригинальный текст
    if (translations[language] && translations[language][key]) {
      // Если есть перевод, устанавливаем его
      element.textContent = translations[language][key];
    } else if (language === "en" && originalText) {
      // Если выбран английский, и есть оригинальный текст, восстанавливаем его
      element.textContent = originalText;
    }
  });

  // Обновляем выбранный язык
  document.getElementById("selectedWord").textContent = language;

  // Сохраняем выбранный язык в localStorage
  localStorage.setItem('selectedLanguage', language);
}

// Функция для получения сохраненного языка из localStorage
function getSavedLanguage() {
  return localStorage.getItem('selectedLanguage');
}

// Проверяем, есть ли сохраненный язык в localStorage
var savedLanguage = getSavedLanguage();
if (savedLanguage) {
  // Если есть, устанавливаем его как выбранный язык при загрузке страницы
  selectWord(savedLanguage);
}
