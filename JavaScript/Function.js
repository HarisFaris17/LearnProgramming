//scope dari function adalah seluruh di global dan bisa didefinisikan di awal ataupun terakhir ataupun di tengah tengah code
// untuk function expression scope nya adalah sisa kode semenjak function expression di deklarasikan
//function dalam javascript cukup mirip dengan instance dalam java, bahkan function dalam javascript masuk kedalam kategori
//pada dasarnya sebuah function adalah sebuah object. dan jika dibarengi dengan new maka function akan menjadi constructor

function haris(){
    return "hehe";
}

var hehe = haris();
console.log(hehe);

//function expression adalah function yang dimasukkan kedalam suatu variabel (bisa var,let,const)
var sayang = function(){
    return "sayang nuke";
}

var variabelSayang = sayang();
console.log(variabelSayang);

// sintaks sayang diatas bisa lebih disederhanakan, menjadi seperti lambda function di java 
var sayangSederhana = () => {return "sayang nuke";};
console.log(sayangSederhana());

//jika function expression menggunakan var atau let maka variabel nya bisa diubah, sama seperti variabel biasa
//yang misal semulanya sayangSederhana adalah array bisa diubah menjadi String atau dari satu tipe lain ke tipe lain pula
sayangSederhana = 5;
console.log(sayangSederhana)

//untuk const tidak bisa diubah ke expression lain, karena memang definisi dari const, tetapi jika function expressionnya membutuhkan
//parameter, maka boleh dimasukkan argumen pada parameter tersebut
const sayangConst = () => {return "sayang const";};
console.log(sayangConst());
/*error karena sayangConst adlaha constant
sayangConst = 10;
console.log(sayangConst);*/

//juga bisa menggunakan arraw tanpa return
const sayangConstLain = () => "sayang const lain";
console.log(sayangConstLain());

var array = [1,2,3,4];
//map adalah method yang argumentnya adalah sebuah fungsi, sehingga fungsi tersebut akan melakukan perintah tertentu pada tiap elemetnya
//dan mereturn hasil perintah tersebut, dalam kasus ini akan mengkuadratkan tiap elementnya
//memasukkan arrow function
var arrayku = array.map(x => x*x);
console.log(arrayku);
//memasukkan variabel yang berisi fungsi
var arrayFungsi = function (x){return x*x;};
//mempassing fungtion expression
arrayku = array.map(arrayFungsi);
//kayak begini tidak bisa karena seakan akan mempassing return value dari fungsi arrayFungsi(x) dan bukan mempassing functionnya
//arrayku = array.map(arrayFungsi(x))
console.log(arrayku);

//setiap inner function membentuk closure terhadap function outernya, yakni inner function dapat mengakses variabel dari outer
//tetapi outer tidak bisa mengakses variabel dari function inner

//nama dari function expression dapat dinyatakan untuk mereference dirinya sendiri
//bisa kita lihat bahwa ini function expression ini adalah recursive
const factorial = function fac(i){return i===0 || i===1 ? 1:i*fac(i-1)}

console.log(factorial(5));

//bisa juga menggunakan nama variabelnya
const factorial2 = function(i){return i===0||i===1 ? 1:i*factorial2(i-1)}
console.log(factorial2(6))


function a(){
    x=1;
    function b(){
        y=2;
        function c(){
            z=3
            console.log(x+y+z);
        }
        //mereturn function c, bukan cuma number, string, array saja yang bisa diangkut oleh sebuh variabel
        return c;
    }
    return b;
}

//ingat karena var, let, const bisa mengandung fungsi (bukan hanya hasil return fungsi), maka bisa dijadikan sebagai berikut
//karena return dari a adalah b
var coba = a();
// maka disini b akan mereturn function c
var cobac = coba();
//maka disini akan menjalankan fungsi c
cobac();
//dan bisa dilihat disini bahwa pada function c, ia memanfaatkan semua x,y,z sehingga dapat diambil kesimpulan bahwa inner function
//dapat mengakses variabel dari outer functionnya
//setiap outer function yang berargumen dimasukkan ke suatu variabel, maka akan membentuk closure baru
//karena memiliki kemungkinan argumen yang digunakan akan berbeda beda pada tiap variabel

//ada cara tercepa untuk memanggil function c;
a()()();



//function juga bisa digunakan untuk mempassing function ke suatu function;
function suatuFunction (f,a){
    //inisialisasi agar javascript mengenal bahwa returnFunction adalah array
    var returnFunction = []
    for(let i = 0; i<a.length;i++){
        returnFunction[i] = f(a[i]);
    }
    return returnFunction;
}

a= [9,8,7,6]
const kuadrat = function (a){
    return a*a;
}
//bisa mmempassing functoin expression
console.log(suatuFunction(kuadrat,a));

// atau mempassing function biasa
function kuadratBiasa(a){
    return a*a;
}
console.log(suatuFunction(kuadratBiasa,a))

//function juga bisa menggunakan rest operator, digunakan untuk jumlah argumen yang sembarang. rest ditandai dengan titik titik
//dan harus berada di akhir parameter
function functionRest(x,...args){
    for(i of args){
        x+=i;
    }
    return x;
}
//jadi args inibisa dianggap sebagai array-like
console.log(functionRest(1,10,3,4,5));

// untuk argumen sebenarnya javascript men-support banyak argumen meskupun dalam fungsinya tidak didefinisikan
//javascript sebenarnya menggabungkan tiap argumen, menjadi array-like, dan array ini disebut dengan arguments
function cobaArguments(separator){
    let x="";
    for(i=1;i<arguments.length;i++){
        x+=arguments[i]+separator;
    }
    return x;
}

//bisa diliha disini meskipun argumentnya melebihi parameter yang ditentukan, tapi bisa bisa dieksekusi
console.log(cobaArguments(";","haris","sayang","nuke"));

//jika default paramter tidak didefinisikan, maka secara default parameter tersebut bertipe undefined

//function juga bisa ada default parameter,namun perlu diperhatikan bahwa default parameter yang didefinisikan harus berada di belakang
//dan bukan didepan karena javascript nanti bingung
function cobaDefault(x=1,y){
    this.x=1;
    this.y=2;
    return x+y;

}

console.log(cobaDefault())
//
console.log(cobaDefault);