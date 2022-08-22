//destructuing digunakan untuk mendapatkan nilai tertentu dari suatu object
var ruangan = {
    temp : 23,
    hum : 25,
    luas : 30
}

// cara mendapatkan nilai indivisual ruangan bisa diambil dengan menspesifikasikan nama variabel acak untuk menyimpan value dari key tertentu dalam objek
var {temp : tempindividual, hum: humindividual, luas: luasindividual} = ruangan;
console.log(tempindividual);
console.log(humindividual);
console.log(luasindividual);

// tetapi kita juga dapat menggunakan nama key-nya saja untuk mendapatkan value dari key yang kita spesifikasikan untuk destructur pada objek ruangan
let {temp, hum, luas}=ruangan;

console.log(temp);
console.log(hum);
console.log(luas);

//untuk nested property bisa dengan nested object seperti biasa
var nested =  {
    hahah : "haha",
    heheh : "heheh",
    nestingProperty : {
        hahahnested: "hahahnested",
        hehehnested : "hehehnested"
    }
}

var {nestingProperty : { hahahnested : variabelDiambil}} = nested;
console.log(variabelDiambil);

//untuk nested property kita juga dapat menggunakan nested keynya saja tanpa nested value-nya
var nested =  {
    hahah : "haha",
    heheh : "heheh",
    nestingProperty : {
        hahahnested: "hahahnested",
        hehehnested : "hehehnested"
    }
}
var {nestingProperty : { hahahnested}} = nested;
console.log(hahahnested)

//karena array adalah objek juga dengan propertynya adalah bilangan bulat positif sampai banyak elemen dari array, maka kita dapat object destructuring pada array

const arrayku = [1,2,3,4,5,6];
let {0:nomor1, 1:nomor2}=arrayku
console.log(nomor1)
console.log(nomor2)

//destructing juga bisa digunakan untuk array
//untuk mendapatkan element tertentu dari array yang ingin kita dapatkan nilainya, index dari nilai yang ingin didapatkan,
//harus sesuai dengan index dari variabel container
//const disini menspesifikasikan tiap variabel penyimpan element array adalah sebuah const
const [a,b,,c] = [1,2,3,4,5,6,7];

//**error karena c const
//c=1; 

console.log(a,b,c);

//destructuring juga bisa digunakan dengan rest paramter
//sama seperti rest parameter biasa, yang akan mengambil sisa parameternya kedalam variabel rest parameter tersebut,
//disini rest parameter haha akan mengambil dari index 2 sampai akhir dari [1,2,3,4,5,6,7]
const [,,...rest] = [1,2,3,4,5,6,7];
console.log(rest);

// dengan destructuring ini juga kita dapat melakukan penggabungan seluruh element dari banyak Array
const array1 = [1,2,3];
const array2 = [3,4,5];
//array destructuring akan mengeluarkan tiap element dari tiap array. Lalu akan menginisialisasi array dari seluruh element dari seluruh array
const arrayGabungan = [...array1,...array2];

console.log(arrayGabungan);

//destructing juga bisa digunakan untuk function

var objectDestructing = {
    min : 90,
    max : 100,
    hehe : 10000,
    haha : 1010101010
}

//disini terlihat bahwa, meskipun kita mempassing objectDestructing yang akan diambil tetap property min dan maxnya saja 
//karena parameter fungsinya berstruktur min dan max saja
const constDestructed = (function ({min,max}) {
    return (min+max)/2;
})(objectDestructing);
console.log(constDestructed);

//destructuring objek untuk meng-assign ke variabel yang sudah ada, dengan syarat variabel harus didefinisikan di bawah variabel yang ingin kita destructing
//error karena firstname dan lastName didefinisikan dahulu sebelum fullname
// let firstName = "Haris";
// let lastName = "Prasetyo";

let fullname={
    firstName : "Nuke",
    lastName : "Betharini"
}
//tidak error
let firstName = "Haris";
let lastName = "Prasetyo";


({firstName, lastName}=fullname);

console.log("firstname")
console.log(firstName)
console.log(lastName)

// const profile = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18
// }
 
// let firstName = "Dimas";
// let age = 20;
 
// // menginisialisasi nilai baru melalui destructuring object
// ({firstName, age} = profile);
 
// console.log(firstName);
// console.log(age);
 



// Jika suatu property tidak terdefinisi pada suatu objek, maka variabel yang berkorespondensi dengan key dari property tersebut menjadi undefined
const tesUndefined={
    hehe:'1'
}

const {hehe,variabelUndefined}=tesUndefined
console.log(hehe);
console.log(variabelUndefined);

//kita dapat melakukan default value pada variabel dalam object destructuring

const tesDefault={
    coba:'1'
}
//karena property defaultVariabel tidak ada di dalam tesDefault, maka 10 akan dimasukkan ke dalam defaultVariabel
const {coba,defaultVariabel=10}=tesDefault;
console.log(defaultVariabel);

// Kita dapat melakukan penukaran nilai variabel dengan mudah di dalam javascript dengan destructuring array
//uniknya disini harus menggunakan ';' pada inisialisasi variabel n
let m=1
let n=2;

[m,n]=[n,m]

console.log(m)
console.log(n)