export default class Pizza{
    price = 0;
    calories = 0;
    type = null;
    size = null;
    topping = [];

    constructor(type,size){
        this.type = type;
        this.add(type);
        this.size = size;
        this.add(size);
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
        return `Добавки: ${this.topping.map((item) => item.name).join(', ')}`;
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
        return `Размер пиццы: ${this.size.name}`;
    }
    getStuffing(){
        return `Вид пиццы: ${this.type.name}`;
    }
    calculatePrice(){
        return `Цена: ${this.price} руб`;
    }
    calculateCalories(){
        return `Калории: ${this.calories} ккал`;
    }
}