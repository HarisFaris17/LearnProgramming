const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
  }

const isCoffeeMachineReady=true;
//   module.exports = {coffeeStock,isCoffeeMachineReady};

//   console.log(module)

//kita juga bisa meng-export module dengan menggunakan syntax yang sudah didukung di ES6
// export default isCoffeeMachineReady;
//bisa meng-export berbagai objek
export {coffeeStock,isCoffeeMachineReady}