//variabel number pada javascript hanya bisa menampun 2^53-1, sehingga jika kita membutuhkan suatu tipe data yang menampung lebih besar dari itu, maka perlu binint
//selayaknya int, pembagian yang berkaitan dengan BigInt akan dibulatkan jika menghasilkan bilangan desimal

//bilangan bigInt dinotasikan postfix "n"
let bigint1 = 12n;
let binint2 = 199999999999999999999999999999999n

console.log(bigint1+binint2);

//hasil pembagian dibulatkan ke bawah
console.log(bigint1/binint2);
console.log(binint2/bigint1);
