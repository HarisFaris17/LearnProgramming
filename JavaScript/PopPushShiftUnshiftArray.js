//array bisa mengandung tipe apapun selayaknya var, namun sebaiknya disamakan tipenya
//

var str = [[1,2],[3,4],5,6];

/*console.log(str[0]);
console.log(str[2]);*/

//push untuk memasukkan argument ke belakang array
str.push(7);
console.log(str);
//akan mereturn panjang array
var str2 = str.push(3);
console.log(str2);

//akan mereturn element yang di remove di array
//pop akan mengeluarkan element terbelakang dari array
var haha = str.pop();
console.log(haha);

//akan menghapus element 0 dari str
//akan mereturn element yang di remove di array
var str3 = str.shift();
console.log(str);
console.log(str3);

//akan mereturn panjang array setelah di unshift
var str4 = str.unshift(9);
console.log(str);
console.log(str4);