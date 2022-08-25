//kita bisa meng-import module dengan syntax yang didukung oleh Javascript ES6
// import  stateCoffeMachine  from "./state.js";
//bisa mengimport banyak dengan object literals namun nama variabelnya harus sama dengan yang dispesifikasikan oleh exports
// import { isCoffeeMachineReady,coffeeStock } from "./state.js";



console.log(stateCoffeMachine)

const coffeeStock = require('./state').coffeeStock
console.log(coffeeStock);

const makeCoffee = (type,milliGrams)=>{
    if(milliGrams<=coffeeStock[type]){
        console.log(type+" siap dibuat");
    }
    else{
        console.log('kopi tidak cukup bahan');
    }
}

makeCoffee('robusta','80');

const isCoffeeMachineReady = require('./state').isCoffeeMachineReady
console.log(isCoffeeMachineReady);

// bisa juga menggunakan destructuring objek
// const {coffeeStock, isCoffeeMachineReady} = require('./state')