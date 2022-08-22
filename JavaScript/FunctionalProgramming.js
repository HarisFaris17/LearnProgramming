//konsep paradigma functional programming adalah konsep dimana membangun program secara deklaratif dibandingkan imperatif (dapat diartikan menggunakan fungsi yang sudah ada dibandingkan membangun sendiri program yang pada dasarnya mengambil line code yang lebih panjang seperti menggunakan operasi loop dan sebagainya)
// pure function adalah fungsi yang tidak boleh bergantung terhadap objek di luar fungsi selain yang didefinisikan oleh argumen/parameter dan tidak boleh mengubah parameter fungsi
// impure function
var pi=3.14
const luas_lingkaran=(jarijari)=>{
    return pi*jarijari*jarijari;
}
console.log(luas_lingkaran(1));
//tidak sengaja mengubah pi
pi=5
console.log(luas_lingkaran(1))

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


let person = {name:"Haris"};
// impure function karena mengubah parameter person
function createNewPerson(age,person){
    //mengubah objek person di atas
    person.age=age
    return person;
}

let newPerson = createNewPerson(18,person);
console.log(newPerson);
console.log(person);

//dalam functional programming lebih baik mengembalikan objek baru tanpa variabel untuk menghindari penggunaan objek di luar fungsi

function createNewPersonWithAge(age,person){
    return {...person,age};
}
let personku={name:"Nuke"}
let personBaruTheReal=createNewPersonWithAge(18,personku);
console.log(personBaruTheReal);

//immutability adalah konsep dalam paradigma FP dimana fungsi tidak boleh mengubah property apapun dalam objek yang dijadikan argumen
let kkkkkkkk={firstName: 'aha',lastName:"mmm"}
// fungis yang tidak diizinkan dalam FP
function changeLastName(lastName,person){
    person.lastName=lastName;
}

changeLastName("Prasetyo",kkkkkkkk);
console.log(kkkkkkkk);

//lebih baik menggunakan fungsi yang mengembalikan objek baru namun dengan property baru dari argumen yang ingin diubah
let personTest = {firstName: 'test',lastName:"mistake"}
function createNewPersonWithLastNameChanged(lastName,person){
    return {...person,lastName:lastName};
}

let newPersonLastNameChanged = createNewPersonWithLastNameChanged("true",personTest);
console.log(newPersonLastNameChanged)
