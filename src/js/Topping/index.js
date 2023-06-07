export default class Topping {
    id;
    img='';
    name='';
    price = 0;
    calories = 0;
    constructor(props){
        this.id = props.id;
        this.img = props.img;
        this.name = props.name;
        this.price = props.price;
        this.calories = props.calories;
    }
    render(){
        const elem = document.createElement('div');
        elem.classList.add('pizza-topping-card');
        elem.dataset.id = this.id;
        elem.innerHTML = `
                <div class = "pizza-topping-card__img">
                    <img src="${this.img}" alt="${this.name}">
                </div>
                <span class="pizza-topping-card__title">${this.name}</span>
                <span class="pizza-topping-card__price">${this.price} Р</span>
        `;
        return elem;
    }
}