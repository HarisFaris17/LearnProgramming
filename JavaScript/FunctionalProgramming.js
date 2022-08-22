// pure function adalah fungsi yang tidak boleh ada interupsi dari maupun ke luar fungsi selain yang didefinisikan oleh argumen/parameter
var objectku="hehe"

// impure function
function tidak_sengaja_mengubah_objectku(){
    objectku="berubah"
}

tidak_sengaja_mengubah_objectku();
console.log(objectku);

// dalam prakteknya sebaiknya menggunakan let dalam fungsi agar tidak menganggu object luarnya atau mengembalikan tanpa variable
var tidakberubah="kakaka"
//pure function
function tidak_mengubah_tidakberubah(){
    let tidakberubah="tidakberubah"
}

tidak_mengubah_tidakberubah();
console.log(tidakberubah);

//pure function juga
function mengembalikan_tanpa_object(){
    return "hahahaha"
}

console.log(mengembalikan_tanpa_object());