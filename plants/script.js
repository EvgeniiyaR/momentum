//burger menu

let burgerMenu = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let navbar = document.querySelector('.header__navbar');
let body = document.querySelector('.body');
let main = document.querySelector('.main')

burgerMenu.addEventListener('click', function() {
  navbar.after(menu);

  if (!menu.classList.contains('header__nav_active')) {
    window.setTimeout(function(){
      menu.classList.add('header__nav_open');
      menu.classList.add('header__nav_active');
      main.classList.add('main_blur');
    },0);
  } else {
    menu.classList.remove('header__nav_open');
    menu.classList.add('header__nav_close');
    main.classList.remove('main_blur');
    window.setTimeout(function(){
      menu.classList.remove('header__nav_active');
      menu.classList.remove('header__nav_close');
    },700);
  }

  document.querySelector('.header__burger span:nth-child(1)').classList.toggle('header__burger_first');
  document.querySelector('.header__burger span:nth-child(2)').classList.toggle('header__burger_middle');
  document.querySelector('.header__burger span:nth-child(3)').classList.toggle('header__burger_middle');
  document.querySelector('.header__burger span:nth-child(4)').classList.toggle('header__burger_last');

  document.addEventListener('click', function(e) {
    if (menu.classList.contains('header__nav_active') && (e.target != burgerMenu || burgerMenu.classList.contains(e.target))) {
      document.querySelector('.header__burger span:nth-child(1)').classList.remove('header__burger_first');
      document.querySelector('.header__burger span:nth-child(2)').classList.remove('header__burger_middle');
      document.querySelector('.header__burger span:nth-child(3)').classList.remove('header__burger_middle');
      document.querySelector('.header__burger span:nth-child(4)').classList.remove('header__burger_last');
      menu.classList.remove('header__nav_open');
      menu.classList.add('header__nav_close');
      main.classList.remove('main_blur');
      window.setTimeout(function(){
        menu.classList.remove('header__nav_active');
        menu.classList.remove('header__nav_close');
      },700);
    }
});
});

//service

let serviceBtn = document.querySelectorAll('.service__btn');
let serviceSubtitle = document.querySelectorAll('.service__subtitle');
let serviceItem = document.querySelectorAll('.service__service-item');
let listService = [];
let dictService = {
  'Gardens': [0, 4],
  'Lawn': [2, ],
  'Planting': [1, 3, 5],
};
let countService = 0;

serviceBtn.forEach(elementServiceBtn => elementServiceBtn.addEventListener('click', function() {
  if (!elementServiceBtn.classList.contains('service__btn_active')) {
    if (countService === 2) {return;}
    countService += 1;

    elementServiceBtn.classList.add('service__btn_active');
    for (let i of dictService[elementServiceBtn.textContent]) {
      if (!listService.includes(i)) {listService.push(i)};
    }

    serviceItem.forEach(elementServiceItem => elementServiceItem.classList.add('service__blur'));
    for (let i of listService) {
      serviceItem[i].classList.remove('service__blur');
    }

  } else {
    countService -= 1;
    for (let i of dictService[elementServiceBtn.textContent]) {
      serviceItem[i].classList.add('service__blur');
      elementServiceBtn.classList.remove('service__btn_active');
      let index = listService.indexOf(i);
        if (index > -1) {listService.splice(index, 1);}
      }
  }
  if (listService.length === 0) {
    serviceItem.forEach(elementServiceItem => elementServiceItem.classList.remove('service__blur'));
  }
}))

//price

let priceBtn = document.querySelectorAll('.prices__item');
let priceBtnActive = document.querySelectorAll('.prices__item-active');
let priceClick = document.querySelectorAll('.prices__click');
let listPrice = ['Basics', 'Standard', 'Pro care'];
let listPriceIndex = [];
let kek = 0;

priceBtn.forEach(elemenPriceBtn => elemenPriceBtn.addEventListener('click', function() {
  if (elemenPriceBtn == priceBtn[0]) {
    priceBtnActive[0].classList.remove('prices__item_inactive');
    priceBtn[0].classList.add('prices__item_inactive');
    priceBtnActive[1].classList.add('prices__item_inactive');
    priceBtn[1].classList.remove('prices__item_inactive');
    priceBtnActive[2].classList.add('prices__item_inactive');
    priceBtn[2].classList.remove('prices__item_inactive');

    priceClick[0].addEventListener('click', function() {
      priceBtnActive[0].classList.add('prices__item_inactive');
      priceBtn[0].classList.remove('prices__item_inactive');
  })
  } else if (elemenPriceBtn == priceBtn[1]) {
    priceBtnActive[1].classList.remove('prices__item_inactive');
    priceBtn[1].classList.add('prices__item_inactive');
    priceBtnActive[0].classList.add('prices__item_inactive');
    priceBtn[0].classList.remove('prices__item_inactive');
    priceBtnActive[2].classList.add('prices__item_inactive');
    priceBtn[2].classList.remove('prices__item_inactive');

    priceClick[1].addEventListener('click', function() {
      priceBtnActive[1].classList.add('prices__item_inactive');
      priceBtn[1].classList.remove('prices__item_inactive');
  })
  } else {
    priceBtnActive[2].classList.remove('prices__item_inactive');
    priceBtn[2].classList.add('prices__item_inactive');
    priceBtnActive[1].classList.add('prices__item_inactive');
    priceBtn[1].classList.remove('prices__item_inactive');
    priceBtnActive[0].classList.add('prices__item_inactive');
    priceBtn[0].classList.remove('prices__item_inactive');

    priceClick[2].addEventListener('click', function() {
      priceBtnActive[2].classList.add('prices__item_inactive');
      priceBtn[2].classList.remove('prices__item_inactive');
  })
}})
)

//contacts

const contactsSelectBtn = document.querySelector('.contacts__select-button');
const contactsList = document.querySelector('.contacts__list');
const contactsOption = document.querySelectorAll('.contacts__option');
const contactsDropdownHidden = document.querySelector('.contacts__dropdown-hidden');
const contactsWrapperCard = document.querySelector('.contacts__wrapper-card');
const contactsPick = document.querySelectorAll('.contacts__pick');
const contactsCardButton= document.querySelector('.contacts__card-button');

contactsSelectBtn.addEventListener('click', function() {
  contactsList.classList.toggle('contacts__list_visible');
  this.classList.add('contacts__select-button_active');
})

contactsOption.forEach(function (listItem) {
  listItem.addEventListener('click', function(e) {
    e.stopPropagation();
    contactsSelectBtn.innerText = this.innerText;
    // contactsSelectBtn.focus();
    contactsDropdownHidden.value = this.dataset.value;
    contactsList.classList.remove('contacts__list_visible');
    if (!contactsWrapperCard.classList.contains('contacts__wrapper-card-active')) {
      contactsWrapperCard.classList.add('contacts__wrapper-card-active');
    } else {
      contactsSelectBtn.classList.remove('contact__wrapper-card-active');
    }
    if (contactsDropdownHidden.value === 'Canandaigua, NY') {
      contactsPick[0].innerText = 'Canandaigua, NY';
      contactsPick[1].innerText = '+1	585	393 0001';
      contactsPick[2].innerText = '151 Charlotte Street';
      contactsCardButton.href = 'tel:+1 585 393 0001';
    } else if (contactsDropdownHidden.value === 'New York City') {
      contactsPick[0].innerText = 'New York City';
      contactsPick[1].innerText = '+1	212	456 0002';
      contactsPick[2].innerText = '9 East 91st Street';
      contactsCardButton.href = 'tel:+1 212 456 0002';
    } else if (contactsDropdownHidden.value === 'Yonkers, NY') {
      contactsPick[0].innerText = 'Yonkers, NY';
      contactsPick[1].innerText = '+1	914	678 0003';
      contactsPick[2].innerText = '511 Warburton Ave';
      contactsCardButton.href = 'tel:+1 914 678 0003';
    } else if (contactsDropdownHidden.value === 'Sherrill, NY') {
      contactsPick[0].innerText = 'Sherrill, NY';
      contactsPick[1].innerText = '+1	315	908 0004';
      contactsPick[2].innerText = '14 WEST Noyes BLVD';
      contactsCardButton.href ='tel:+1 315 908 0004';
    }
    if (contactsDropdownHidden.value !== '') {
      contactsSelectBtn.classList.add('contacts__select-button_not-focus');
    }
  })
})

document.addEventListener('click', function(e) {
  if (e.target !== contactsSelectBtn) {
    contactsSelectBtn.classList.remove('contacts__select-button_active');
    contactsList.classList.remove('contacts__list_visible');
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === 'Tab' || e.key === 'Escape') {
    contactsSelectBtn.classList.remove('contacts__select-button_active');
    contactsList.classList.remove('contacts__list_visible');
  }
})

//header

const headerLink = document.querySelectorAll('.header__link');

let dictHeader = {
  'Home': 0,
  'About us': 1,
  'Service': 2,
  'Price': 3,
  'Contacts': 4,
};

headerLink.forEach(element => element.addEventListener('click', function() {
  headerLink.forEach(el => {
    el.classList.remove('header__link_active');
  })
  headerLink[dictHeader[element.textContent]].classList.add('header__link_active');
}))