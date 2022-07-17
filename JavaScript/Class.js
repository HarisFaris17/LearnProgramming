//class adalah kasus spesial dari function
//class tidak boleh memiliki lebih dari 1 constructor
//class adalah spesial function, sehingga karena function memiliki prototype Function.prototype->Object.prototype->null
class haris{
    //constructor juga bisa memiliki parameter default
    constructor(x,y=1){
        this.x = x;
        this.y = y;
    }
    //method haris
    methodku(){
        console.log(this.x+this.y);
    }
}

var objectHaris = new haris(1,2);
var objectHarisDefaultY = new haris(4);

// Sebenarnya kita dapat mendefinisikan juga objek dengan funciton biasa
function harisPakeFunction(x,y){
    this.x=x;
    this.y=y;
    //bisa menggunakan arrow function 
    this.methodku = ()=>console.log("this.x+this.y = "+(this.x+this.y));
}

let objectHarisPakeFunction = new harisPakeFunction(1,2);
objectHarisPakeFunction.methodku();


//class dapat memiliki field dan method
//dalam class haris ada 1 method yaitu methodku sedangkan untuk field nya adalah x dan y
console.log(objectHaris.y);
objectHaris.methodku();
console.log(objectHarisDefaultY.y);


//class dapat memiliki static method, field maupun static initializier block, sehingga static method maupun field tidak bisa dipanggil
//melalui instance class tersebut
//sebuah method static atau field static suatu class tidak dimiliki oleh objek yang merupakan objek class tersebut
//tapi static ini milik class bukan objek
class coba{
    //x akan dieksekusi terlebih dahulu
    static x=11;
    //static initializer block
    static {
        console.log("x dalam static initializer block adalah"+coba.x);
    }
    static haha(){
        console.log("ini x di dalam static haha "+coba.x);
    }

}

//static field dan static initializer block akan dijalankan sesuai urutan dalam penulisan dalam class

//untuk memanggil method static dalam class adalah (class).(methodstatic) seperti java
coba.haha();

//dalam class ada class declaration seperti diatas dan class expression, sama seperti function
//hanya saja untuk masalah hoisting pada class declaration, class dapat digunakan semenjak class didefinisikan, jadi tidak bisa sembarang
//tidak seperti function declaration bisa ditempatkan di sembarang tempat

//error
/*var hoisting = new hoist();
class hoist{
    hehe = 0;
}*/

let classExpression = class {
    coba = 0;
    constructor(coba=10) {
        this.coba = coba;
    }
}

//class expression berperilaku sebagaimana function expression
//undefined
console.log(classExpression.coba)

let objectDariClassExpression = new classExpression();
console.log(objectDariClassExpression.coba)

//untuk menjadikan suatu field adalah private, harus ditambah # di depan fieldnya
//class dalam javascript juga bisa memiliki getter dan setter, tetapi agak unik
//karena biasanya dalam java adalah bernama get(nama fieldnya), namun dalam javascript bisa nama apa saja tetapi harus diawali
//dengan get. begitu juga untuk set
//dan yang lebih unik lagi nama get dan set bisa sama seperti dibawah
//untuk getnya bisa tanpa parentheses contohnya objek.x
//dan untuk settnya juga menggunakan assignment contohnya objek.x=10 maka 10 akan dimasukkan ke cobalagi
let classPrivate = class {
    //untuk menandakan bahwa #cobalagi adalah number
    #cobalagi=0;
    constructor(cobalagi){
        this.#cobalagi=cobalagi;
    }
    get x(){
        return this.#cobalagi;
    }
    set x(cobalagi){
        this.#cobalagi = cobalagi;
    }
}

let objectDariClassPrivate = new classPrivate(69);

//error karena #cobalagi adalah private
/*console.log(objectDariClassPrivate.#cobalagi)*/

//memasukkan nilai 10101010 ke cobalagi
objectDariClassPrivate.x=10101010;
console.log(objectDariClassPrivate.x)

//prototype dari class adalah Function
console.log(classPrivate.prototype.prototype);

//objek yang juga dapat didefinisikan suatu method atau attribute baru dengan memasukkannya ke prototype
//jika method atau attribute dimasukkan ke prototype, maka objek lain dari class yang sama tidak ada
function classHehe(x=1,y=2){
    this.x=x;
    this.y=y;
    
};

classHehe.prototype.methodBaru= ()=>{console.log("hahahaha")};

let objekDenganMethodBaruDariPrototype = new classHehe();
objekDenganMethodBaruDariPrototype.methodBaru();

//class dalam javascript bisa private juga. Private bisa dengan menambahkan '_' atau '#' sebagai prefix attribute
class cobaPrivate{
    #private2=6;
    _mmm=2;
    constructor(){
        //menggunakan private identifier '_' dengan this tidak akan error
        this._private = 3;
        //menggunakan this dengan private identifier '#' akan error
        // this.#kkk=2
    }
    method(){
        console.log(this._private);
        console.log(this.#private2);
    }
}

let cobaPrivateObjek = new cobaPrivate();
cobaPrivateObjek.method();

//class dalam javascript juga bisa untuk inheritance
class parentClass{
    constructor(x=10){
        this.hehe=x;
    }
    aaa(){
        console.log(this.hehe);
    }
}

class childClass extends parentClass{
    constructor(y=10){
        super(y);
        this._attributeChild=90;
    }
}

let objekChildClass = new childClass(90);

//child objek bisa mengakses method dari parent class.
objekChildClass.aaa();