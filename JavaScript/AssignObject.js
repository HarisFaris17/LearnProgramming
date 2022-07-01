
let array = [1,2,3];
let array2 = {};

//memasukkan object source ke target. karena array juga merupakan objek maka bisa di assign. hanya saja field array2 adalah index array
Object.assign(array2,array);
array2[0]=99;
console.log(array2);
console.log(array);