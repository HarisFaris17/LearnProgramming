//variabel global scope
var test = "test";

function haris(){
    //local variabel karena didefinisikan var
    var say = "say";
    //global variabel karena tidak didefinisikan
    global = "global";
}

function haris2(){
    console.log(global+" in haris2");
    /*error karena bukan global variabel
    console.log(say);*/
}
//meskipun function ini tidak dijalankan tetapi global tetap bisa diakses
//haris();
haris2();
console.log(test);