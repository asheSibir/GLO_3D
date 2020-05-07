'use strict';
const slider = () => {
    const slider = document.querySelector('.portfolio-content'), //id="all-progects">
        slide = slider.querySelectorAll('.portfolio-item'),
        btn = slider.querySelectorAll('.portfolio-btn');
//ВОЗВРАЩЕНИЕ УДАЛЕННЫХ ДОТОВ
    const dotsUl = document.createElement('ul');
    dotsUl.classList.add('portfolio-dots');
    slider.insertAdjacentElement('beforeend', dotsUl);
    const dot = document.createElement('li');
    dot.classList.add('dot');
    dotsUl.appendChild(dot);
    for (let i = 0; i < slide.length - 1; i++){
        const newDot = dot.cloneNode(true);
        dotsUl.appendChild(newDot);
    }
    const dots = dotsUl.querySelectorAll('li'); 
    dots[0].classList.add('dot-active');
// ДОТЫ СНОВА С НАМИ            
    let currentSlide = 0, 
        interval; //для включения и остановки

    const prevSlide = (elem, index, strClass) =>{
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) =>{
        elem[index].classList.add(strClass);
    };
    // Сам слайдер, активация и дизактивация класса (видимости) элемента
    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active'); //ВЕРНУТЬ!!
        currentSlide++;
        if (currentSlide === slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active'); //ВЕРНУТЬ!!
    };
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };
    slider.addEventListener('click', (event) =>{
        event.preventDefault();
        let target = event.target;

        if (target.matches('#arrow-right, #arrow-left, .dot')){
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dots, currentSlide, 'dot-active'); //ВЕРНУТЬ!!
            if (target.matches('#arrow-right')){
                currentSlide++;
            } else if (target.matches('#arrow-left')){
                currentSlide--;
                } 
                else if (target.matches('.dot')){ //ВЕРНУТЬ!!
                        dots.forEach((elem, index) => {
                            if (elem === target){
                                currentSlide = index;
                            }
                        });
                    }
            if (currentSlide >= slide.length){
                currentSlide = 0;
            }  
            if (currentSlide < 0){
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dots, currentSlide, 'dot-active'); //ВЕРНУТЬ!!
        }
    });
    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
           startSlide(1500);
        }
    });
    startSlide(1500);
        
};
export default slider;