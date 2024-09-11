const btnLeft = document.querySelector('.reviews__cards__imgleft');
const btnRight = document.querySelector('.reviews__cards__imgright');
const carusellEl = document.querySelector('.reviews__cards__carusel');
const cardsEl = document.querySelectorAll('.reviews__cards__one');

// Определите ширину каждой карточки
const cardWidth = cardsEl[0].offsetWidth;

// Определите общее количество карточек
const totalCards = cardsEl.length;

let currentPosition = 0;

const maxPosition = -((totalCards - 1) * 70) / totalCards;

btnRight.addEventListener('click', function (e) {
  if (currentPosition > maxPosition) {
    currentPosition -= 100 / totalCards;
    if (currentPosition < maxPosition) {
      currentPosition = maxPosition;
    }
    carusellEl.style.transform = `translateX(${currentPosition}%)`;
  }
});

btnLeft.addEventListener('click', function (e) {
  if (currentPosition < 0) {
    currentPosition += 100 / totalCards;
    if (currentPosition > 0) {
      currentPosition = 0;
    }
    carusellEl.style.transform = `translateX(${currentPosition}%)`;
  }
});

 //создание Dot
 const caruselEl = document.querySelectorAll('.reviews__cards__one');
 const dotsEl = document.querySelector('.dots');
 const dots = [];
 
 for (let i = 0; i < caruselEl.length; i++) {
     const dot = document.createElement('span');
     dotsEl.appendChild(dot);
     dot.classList.add('dot');
     dot.style.backgroundColor = 'rgba(157, 200, 44, 0.3)';
     dots.push(dot); // добавляем точку в массив dots
 }
 
 const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
     const index = Array.prototype.indexOf.call(caruselEl, entry.target);
     if (entry.isIntersecting) {
       dots.forEach((dot, i) => {
         if (i === index) {
           dot.style.backgroundColor = 'rgb(157, 200, 44)';
         } else {
           dot.style.backgroundColor = 'rgb(157, 200, 44, 0.3)';
         }
       });
     }
   });
 }, { threshold: 1.0 });
 
 caruselEl.forEach((element) => {
   observer.observe(element);
 });
 
 
 

//-------------------------------------------------------------------------------
const productData = `[

    {
      "src": "./img/1.svg",
      "name": "Стул Венеция",
      "color": "белый",
      "price": "11.990",
      "button": "Купить"
    },
    {
      "src": "./img/1.svg",
      "name": "Стул италия",
      "color": "Светло бежевый",
      "price": "11.990",
      "button": "Купить"
    },
    {
      "src": "./img/2.svg",
      "name": "Стул Рио",
      "color": "Велюрово синий",
      "price": "11.990",
      "button": "Купить"
    },
    {
      "src": "./img/1.svg",
      "name": "Стул Виктория",
      "color": "Желтый",
      "price": "11.990",
      "button": "Купить"
    },
    {
      "src": "./img/1.svg",
      "name": "Стул Венеция",
      "color": "белый",
      "price": "11.990",
      "button": "Купить"
    },
    {
      "src": "./img/1.svg",
      "name": "Стул италия",
      "color": "Светло бежевый",
      "price": "11.990",
      "button": "Купить"
    },
    {
      "src": "./img/2.svg",
      "name": "Стул Рио",
      "color": "Велюрово синий",
      "price": "11.990",
      "button": "Купить"
    },
    {
      "src": "./img/1.svg",
      "name": "Стул Виктория",
      "color": "Желтый",
      "price": "11.990",
      "button": "Купить"
    }

]`

const productsData = JSON.parse(productData);
const gridEl = document.querySelector('.main__categories__grid');



 
productsData.forEach(element => {
    const box = document.createElement('div');
    box.classList.add('main__categories__grid__box');
    gridEl.appendChild(box);

    const boxImg = document.createElement('div');
    boxImg.classList.add('main__categories__grid__box__bg');
    box.appendChild(boxImg);

    const boxSvg = document.createElement('img');
    boxSvg.classList.add('main__svg');
    boxImg.appendChild(boxSvg);
    boxSvg.src = element.src;

    const titleEl = document.createElement('h4');
    titleEl.classList.add('main__categories__grid__box__title');
    box.appendChild(titleEl);
    titleEl.textContent = element.name;

    const colorEl = document.createElement('p');
    colorEl.classList.add('main__categories__grid__box__color');
    box.appendChild(colorEl);
    colorEl.textContent = element.color;

    const priceBox = document.createElement('div');
    priceBox.classList.add('main__categories__grid__box__button');
    box.appendChild(priceBox);
    
    const priceEl = document.createElement('p');
    priceEl.classList.add('main__categories__grid__box__price');
    priceBox.appendChild(priceEl);
    priceEl.textContent = element.price;

    const buttonEl = document.createElement('button');
    buttonEl.classList.add('main__categories__grid__box__button__right');
    priceBox.appendChild(buttonEl);
    buttonEl.textContent = element.button;
});

 