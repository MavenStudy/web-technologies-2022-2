
export default class Button{
    container = null;
    pizza;
    price = 0;
    calories = 0;
    constructor(containerClass ='.js-button-render') {
        this.container = document.querySelector(containerClass);
    }

    render() {
        const values = this.container.textContent.replace(/[^0-9,\s]/g, "").replace(/\s+/g, ' ').trim().split(' ');
        this.price += Number(values[0]);
        if (values[1]) {
            this.calories += Number(values[1]);
        }
        this.container.textContent = '';
        this.container.innerHTML = `Добавить в корзину за <br> ${this.price} Р (${this.calories} кКалл)`;
    }
    add(pizza){
        this.pizza = pizza;
        this.price = this.pizza.price;
        this.calories = this.pizza.calories;

        this.container.textContent = '';
        this.render();
    }
    addToppings(topping){
        this.price = topping.price;
        this.calories = topping.calories;
        console.log(this.price);

        this.render();
    }
    checkSize(elem){
        if(elem == document.getElementById('small')){
            this.price = -200;
            this.calories = -200;
            this.render();
        }
        if(elem == document.getElementById('big')){
            this.price = 200;
            this.calories = 200;
            this.render();
        }
    }
}