//secara umum object tidak bisa diakses dengan index angka selayaknya array, namun jika property dari object tersebut memang ada berupa angka
//maka bisa diakses melalui number
//properties yang tidak ada spasi akan ditampilkan tanpa single quote
//setiap object pasti memiliki default __proto__,prototype,[[prototype]] default properties
//function juga masuk ke dalam Object, sehingga memiliki __proto__, juga array dan Object itu sendiri

//property number akan ditampilkan dengan single quote
var objectSayang = {
    1: "haris",
    2: "haha"
}

console.log(objectSayang);
console.log(objectSayang[1]);
//undefined
console.log(objectSayang[0])

// property object juga bisa tanpa quotes
var objectTanpaQuotes = {
    hahahee : "hahaheeeee"
}

console.log(objectTanpaQuotes.hahahee);


//object juga bisa memiliki function property

var objectDenganFunction = {
    a : 10,
    f : function (x) {console.log(x)}
}

objectDenganFunction.f(10);


//property function dalam object bisa disederhanakan
var objectDenganFunctionSederhana = {
    a : 100,
    f(x){
        console.log(x);
    }
}

objectDenganFunctionSederhana.f("x dalam objectDenganFunctionSederhana")


var objectku = {
    //formatnya adalah (field) : (value)
    "haha" : "hahaObject",
    "haris" : "harisObject",
    "sayang" : "sayangObject"
}

console.log(objectku);
//dapat dipanggil selayaknya field/properties dalam oop
console.log(objectku.haha);

var objectLain = {
    "haha objectlain" : "objectlain haha",
    "haris objectlain" : "objectlain haris",
    "sayang objectlain" : "obejctlain sayang"
}

console.log(objectLain);
//agar mengakses field yang ada spasinya bisa menggunakan square bracket (seperti index dalam array)
console.log(objectLain["haha objectlain"]);

// untuk mengubah nilai properties dapat menggunakan syntaks berikut
objectLain["haha objectlain"]="objectlain haha diganti";
console.log(objectLain["haha objectlain"]);

// untuk menambah property dari suatu objek cukup dengan memasukkan property yang tidak ada pada object tersebut
objectLain["tidakada Objectlain"] = "tidakada Objectlain";
console.log(objectLain["tidakada Objectlain"]);

// untuk mendelete field cukup dengan syntaks delete
delete objectLain["haha objectlain"];
//undefined
console.log(objectLain["haha objectlain"])

//hasOwnProperty digunakan untuk mengetahui apakah ada field dari argument yang dimasukkan
console.log(objectLain.hasOwnProperty("tidakada Objectlain"));

var objectaneh = {
    "car" : {
        "wheel" : 14,
        "body" : 5
    },
    "bycycle" : {
        "wheel bycycle" : 2,
        "body bycycle" : 10
    }
}
console.log(objectaneh);
console.log(objectaneh.car.wheel);
console.log(objectaneh.bycycle["wheel bycycle"]);


//setiap nama property akan diubah kedalam string, kecuali Symbols. contohnya sebagai berikut
// disini objectaneh adalah sebuah object, namun karena disini adalah sebagai property maka diubah menjadi string, seihngga memanggil
//objectaneh.toString()
var objectPropertyObject = {
    objectaneh : "haris"
}

console.log(objectPropertyObject.objectaneh);

