import Button from "../Button/index.js";
export default class SizeChecker{
    container;
    button;
    elemCheck = document.getElementById('small');
    constructor(containerClass = '.js-size-checker') {
        this.container = document.querySelector(containerClass);

        this.container?.addEventListener('click',this.eventHandler.bind(this));
        this.button = new Button();
    }
    eventHandler(event){
        const cardElem = event.target.closest('.pizza-size__title-checker');
        if(cardElem){
            if(cardElem != this.elemCheck)
                this.button.checkSize(cardElem);
            this.elemCheck = cardElem;
        }
    }
}