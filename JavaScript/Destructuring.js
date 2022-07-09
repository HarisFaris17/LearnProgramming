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

//destructuring objek untuk meng-assign ke variabel yang sudah ada
let firstName = "Haris"
let lastName = "Prasetyo"

let fullname={
    firstName : "Nuke",
    lastName : "Betharini"
}

({firstName, lastName}=fullname);

console.log("firstname")
console.log(firstName)
console.log(lastName)

