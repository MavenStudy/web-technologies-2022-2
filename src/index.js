import Pizza from "./js/Pizza/index.js";
import Size from "./js/Size/index.js";
import Topping from "./js/Topping/index.js";
import TypePizza from "./js/TypePizza/index.js";
import PizzaList from "./js/PizzaList/index.js";
import ToppingList from "./js/ToppingList/index.js";
import SizeChecker from "./js/SizeChecker/index.js";

const bigSize = new Size(
    {
            name:'Большая',
            price:200,
            calories:200
    });
const smallSize = new Size(
    {
            name:'Маленькая',
            price:100,
            calories:100
    });

const mozzarella = new Topping(
    {
            id:0,
            name:'Сливочная моцарелла',
            img:'./src/assets/img/mozarella.png',
            price: 99,
            calories: 100
    });
const cheeseBoard = new Topping(
    {
            id:1,
            name:'Сырный бортик',
            img:'./src/assets/img/cheese.png',
            price: 189,
            calories: 50
    });
const chadderAndParmezan = new Topping(
    {
            id:2,
            name:'Чедер и пармезан',
            img:'./src/assets/img/parmezan.png',
            price: 99,
            calories: 150
    });

const margarita = new TypePizza(
    {
            name:'Маргарита',
            price: 500,
            calories: 300
    });
const pepperoni = new TypePizza(
    {
            name:'Пепперони',
            price: 800,
            calories: 400
    });
const bavarskaya = new TypePizza(
    {
            name:'Баварская',
            price: 700,
            calories: 450
    });

const pizzaPepperoni = new Pizza(
    {
            id: 0,
            title:'Пепперони',
            img:'./src/assets/img/pepperoni.jpeg',
            type:pepperoni,
            size: smallSize
    });
const pizzaMargarita = new Pizza(
    {
            id: 1,
            title:'Маргарита',
            img:'./src/assets/img/margarita.jpeg',
            type:margarita,
            size: smallSize
    });
const pizzaBavarskaya = new Pizza(
    {
            id: 2,
            title:'Баварская',
            img:'./src/assets/img/bavarskaya.jpeg',
            type:bavarskaya,
            size: smallSize
    });

const pizzaList = new PizzaList();

pizzaList.addToPizzaList(pizzaPepperoni)
    .addToPizzaList(pizzaMargarita)
    .addToPizzaList(pizzaBavarskaya);

const toppingList = new ToppingList();

toppingList.addToToppingList(cheeseBoard)
    .addToToppingList(mozzarella)
    .addToToppingList(chadderAndParmezan);

const sizeChecker = new SizeChecker();

toppingList.render();
pizzaList.render();
