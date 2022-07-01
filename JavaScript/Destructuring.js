//destructuing digunakan untuk mendapatkan nilai tertentu dari suatu object
var ruangan = {
    temp : 23,
    hum : 25,
    luas : 30
}

// cara mendapatkan nilai indivisual ruangan bisa dengan cara berikut
var {temp : tempindividual, hum: humindividual, luas: luasindividual} = ruangan;
console.log(tempindividual);
console.log(humindividual);
console.log(luasindividual);

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

//destructing juga bisa digunakan untuk array
//untuk mendapatkan element tertentu dari array yang ingin kita dapatkan nilainya, index dari nilai yang ingin didapatkan,
//harus sesuai dengan index dari variabel container
//const disini menentukan untuk kedepan apakah variabel variabel tersebut bisa diubah kembali atau tidak
const [a,b,,c] = [1,2,3,4,5,6,7];

//error karena c const
//c=1; 

console.log(a,b,c);

//destructuring juga bisa digunakan dengan rest paramter
//sama seperti rest parameter biasa, yang akan mengambil sisa parameternya kedalam variabel rest parameter tersebut,
//disini rest parameter haha akan mengambil dari index 2 sampai akhir dari [1,2,3,4,5,6,7]
const [,,...rest] = [1,2,3,4,5,6,7];
console.log(rest);

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

