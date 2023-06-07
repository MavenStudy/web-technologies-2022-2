export default class Pizza {
    id;
    price = 0;
    calories = 0;
    topping = [];
    type = null;
    size = null;
    title ='';
    img='';
    constructor(props){
        this.id = props.id;
        this.title = props.title;
        this.img = props.img;
        this.type = props.type;
        this.add(props.type);
        this.size = props.size;
        this.add(props.size);
    }
    addTopping(topping){
        this.add(topping);
        this.topping.push(topping);
    }
    removeTopping(topping){
        if(this.topping.includes(topping))
        {
            const pizza = this.topping.indexOf(topping);
            this.remove(topping);
            this.topping.splice(pizza, 1);
        }
    }
    getToppings(){
        return this.topping;
    }
    add(pizza){
        this.price += pizza.price;
        this.calories += pizza.calories;
    }
    remove(pizza){
        this.price -= pizza.price;
        this.calories -= pizza.calories;
    }
    getSize(){
        return this.size;
    }
    getStuffing(){
        return this.type;
    }
    calculatePrice(){
        return this.price;
    }
    calculateCalories(){
        return this.calories;
    }

    render(){
        const elem = document.createElement('div');
        elem.classList.add('pizza-card');
        elem.dataset.id = this.id;
        //data-id чтоб не ломалось т.к. на изобржаение тыкаешь оно выводило без айди
        elem.innerHTML = `
            <div class="pizza-card" data-id="${elem.dataset.id}">
                <div class="pizza-card__img">
                    <img src="${this.img}" alt="${this.title}">
                </div>
                <h5 class="pizza-card__title">${this.title}</h5>
            </div>
        `;
        return elem;
    }
}