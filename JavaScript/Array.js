//complex object, bisa memasukkan object dalam array
var arrayaneh = [
    {
        "haris" : "haris arrayaneh",
        "haha" : "haha arrayaneh"
    },
    {
        "haris2" : "haris2 arrayaneh",
        "haha2" : "haha2 arrayaneh"
    }
];

console.log(arrayaneh);
console.log(arrayaneh[0].haris);
console.log(arrayaneh[1].haha2);
//undefined
console.log(arrayaneh[2]);

var array=[1,2,3];
var arrayDalamArray = [[1,2],[3,4]]
//panjang array
console.log(array.length);
var array2=[1];
console.log(array2.length);
var array3=[];
console.log(array3.length);
console.log(arrayDalamArray.length);

//array yang dipass sebagai reference tidak bisa diubah referencenya ke array lain. karena parameter akan menunjuk reference yang ditunjuk array yang dimasukkan. sehingga
//jika di dalam function sewaktu waktu parameter tersebut mereference ke reference lain, maka tidak akan mengubah array yang dimasukkan.
//oleh karena itu memasukkan array baru ke array yang dimasukkan ke fungsi harus 1 demi 1 seperti dibawah
function assignArray(array=[]){
    let functionArray = [4,5,6];
    let i =-1;
    while(++i<functionArray.length){
        array[i]=functionArray[i];
    }
}

//array [1,2,3] akan diubah menjadi [4,5,6]
assignArray(array);
console.log(array);

var arrayConcat = {};
arrayConcat['a']=[];
console.log(arrayConcat);

arrayConcat['a'].push(2);
console.log(arrayConcat);

let arrayOutOfBound = [1,2];
console.log(arrayOutOfBound[-1]?'truthy':'falsy');

let nestedArray = [[1,2],[3,4]];
// akan retturn false, karena pada dasarnya variabel ini menyimpan array dalam array. dan yang kita tahu adalah array merupakan reference. sehingga, meskipun
//array dalam array ini adalah number (number merupakan  primitive object) tetap saja array ini merupakan reference.
//sehingga jika kita memasukkan array seperti dibawah ini, berarti array ini akan menunjuk ke reference lain, sehingga fungsi include tidak melihat bahwa kedua array
//ini adalah array yang sama (hanya melihat referencenya bukan contentnya)
console.log(nestedArray.includes([1,2]));

