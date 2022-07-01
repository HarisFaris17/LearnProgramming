let object1 = {'0':'haha',1:'hehe'};
let object2 = {'0':'haha',1:'hehe'};
let object3 = object1;
console.log(object1==object2)//false meskipun object isinya sama
console.log(object1==object3);//true karena memasukkan object1 by reference ke object3;