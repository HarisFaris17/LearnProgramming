//perbedaan let dan var, kalau var bisa dideklarasikan berapa kali pun sedangkan kalau let tidak
//menginisialisasi sebuah nilai ke dalam variabel disebut juga assignment statement
var saya = "sauaasa";
var saya = "kkk";
let polis = "poli";
//akan error jika let didekalrasikan 2 kali
// let polis = "haa";
console.log(saya);
console.log(polis);

// perbedaan let dan var terletak pada scopenya, scope var adalah 1 fungsi, sedangkan let adalah 1 block
function nama(){
    var sayang = "sayang";
    let nuke = "nuke";
    if(true){ //hak dari local variabel dalam block yang lebih dalam, lebih tinggi dibanding super blocknya 
        //sehingga let nuke disini memiliki hak yang lebih tinggi dengan nuke yang diatas
        let nuke = "nuke dalam block";
        //ingat bahwa var bisa di deklarasikan berpaa kali pun
        var sayang = "sayang dalam block";
        //hak nuke dalam block lebih tinggi
        console.log(nuke);
        console.log(sayang);
    }
    //karena let hanya scope nya block sehingga nuke dalam block tidak akan dieksekusi, tetapi hanya nuke saja
    console.log(nuke);
    //karena scope var adalah 1 fungsi dan bisa diakses di luar block
    // dan juga karena dengan kombinasi dengan konsep bahwa var bisa di deklarasikan berapa kali pun
    // , maka var sayang yang ada di if true tetap bernilai sayang dalam block
    console.log(sayang);
}

nama();
