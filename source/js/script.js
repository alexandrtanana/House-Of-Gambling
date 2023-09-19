// бургер меню
var navMain = document.querySelector('.nav__list');
var navToggle = document.querySelector('.nav-toggle');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('closed')) {
    navMain.classList.remove('closed');
    navMain.classList.add('opened');

  } else {
    navMain.classList.add('closed');
    navMain.classList.remove('opened');
  }
});



// Получаем ссылки на элементы кнопки и иконки
const iconButton = document.getElementById('iconButton');
const iconImage = document.getElementById('iconImage');

// Устанавливаем начальное состояние
let isIcon1 = true;

// Функция для изменения иконки при нажатии
function toggleIcon() {
  if (isIcon1) {
    iconImage.src = 'img/icons/icon-opened.svg'; // Замените 'icon2.png' на путь к вашей второй иконке
  } else {
    iconImage.src = 'img/icons/icon-closed.svg'; // Замените 'icon1.png' на путь к вашей первой иконке
  }
  isIcon1 = !isIcon1; // Инвертируем флаг
}

// Добавляем обработчик события для кнопки
iconButton.addEventListener('click', toggleIcon);



// Выподающий список для выбора языка
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function selectWord(word) {
  document.getElementById("selectedWord").textContent = word;
  toggleDropdown(); // Закрываем выпадающий список
}

// Закрыть выпадающий список, если пользователь кликнул вне его
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



// Попап для логина
const loginBtns = document.querySelectorAll('.loginBtn');
const loginPopup = document.getElementById('loginPopup');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

loginBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    loginPopup.style.display = 'block';
    overlay.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  loginPopup.style.display = 'none';
  overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
  loginPopup.style.display = 'none';
  overlay.style.display = 'none';
});



// Попап для регистрации
document.addEventListener("DOMContentLoaded", function () {
  const openButtons = document.querySelectorAll(".register-open-button");
  const closeButton = document.querySelector(".register-close");
  const popup = document.querySelector(".register-popup");
  const overlay = document.querySelector(".register-overlay");
  const form = document.querySelector(".register-form");

  openButtons.forEach(function (openButton) {
    openButton.addEventListener("click", function () {
      popup.style.display = "block";
      overlay.style.display = "block";
    });
  });

  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Отменяем стандартное действие отправки формы
    popup.style.display = "none";
    overlay.style.display = "none";
  });
});



// Попап для "партнёрства"
document.addEventListener("DOMContentLoaded", function () {
  const openPopupPartnerButtons = document.querySelectorAll(".open-popup-partner");
  const closePopupButtons = document.querySelectorAll(".partner-close");
  const partnerPopup = document.querySelector(".partner-popup");
  const overlay = document.querySelector(".overlay");

  openPopupPartnerButtons.forEach(button => {
    button.addEventListener("click", function () {
      partnerPopup.style.display = "block";
      overlay.style.display = "block";
    });
  });

  closePopupButtons.forEach(button => {
    button.addEventListener("click", function () {
      partnerPopup.style.display = "none";
      overlay.style.display = "none";
    });
  });

  document.addEventListener("submit", function (event) {
    if (event.target.classList.contains("partner-form")) {
      event.preventDefault();
      // Здесь можно добавить код для обработки отправки формы
      // Например, отправку данных на сервер
      partnerPopup.style.display = "none";
      overlay.style.display = "none";
    }
  });
});



// const translate = require('yandex-translate');
// const translator = new translate.YandexTranslate({ apikey: 'YOUR_API_KEY' }); // Замените на свой ключ API

// const textToTranslate = 'Hello, world!'; // Текст, который нужно перевести
// const targetLanguage = 'ru'; // Целевой язык (например, 'ru' для русского)

// translator.translate(textToTranslate, { to: targetLanguage }, (err, res) => {
//   if (err) {
//     console.error('Ошибка при переводе:', err);
//   } else {
//     console.log(res.text[0]);
//   }
// });
