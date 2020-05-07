'use strict';
import countTimer from './modules/countTimer';
import toggle from './modules/toggle';
import togglePopUp from './modules/togglePopUp';
import smoothScroll from './modules/smoothScroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import showDataPhot from './modules/showDataPhot';
import checkData from './modules/checkData';
import calc from './modules/calc';
import increaseTotal from './modules/increaseTotal';
import sendForm from './modules/sendForm';


//Счетчик
countTimer('30 September 2020 16:51');
//МЕНЮ
toggle();
//popup
togglePopUp();
//Scroll
smoothScroll ();
//TABS 
tabs();
// Slider
slider();
// Наша команда, замена фоток (отрабатываем делегирование + dataset)
showDataPhot();
// Калькулятор (отрабатываем регулярки, на ограничение ввода)
checkData();
// Работа калькулятора
calc(100);
// Анимация калькулятора
increaseTotal();
// Отправка формы
sendForm();

