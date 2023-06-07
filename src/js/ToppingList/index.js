import Button from "../Button/index.js";
export default class ToppingList{
    list = [];
    container = null;
    button = null;
    constructor(containerClass = '.js-toppings-render') {
        this.container = document.querySelector(containerClass);
        this.container?.addEventListener('click',this.eventHandler.bind(this));
        this.button = new Button();
    }
    addToToppingList(topping){
        this.list.push(topping);
        return this;
    }
    render(){
        this.container.textContent = '';
        this.list.forEach((topping)=>{
            this.container.appendChild(topping.render());
        });
    }
    eventHandler(event){
        const cardElem = event.target.closest('.pizza-topping-card');
        if(cardElem){
            const topping = this.list.find(item => item.id === +cardElem.dataset.id);
            this.button.addToppings(topping);
        }

    }
}