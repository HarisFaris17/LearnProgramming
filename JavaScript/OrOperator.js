var kontak = [
    {
        "nama" : "Haris",
        "asal" : "Karawang"
    },
    {
        "nama" : "Nuke",
        "asal" : "Karawang barat",
        "nama panggilan" : "sayang"
    }
]

console.log(kontak);
function isExistNamaPanggilan(){
    for(var i =0;i<kontak.length;i++){
        if(kontak[i].nama==="Haris"){
            // || bisa digunakan jika expression sebelumnya mereturn undefined/false
            return kontak[i]["nama panggilan"] || kontak[i].nama+" tidak ada nama panggilan";
        }
    }
}

console.log(isExistNamaPanggilan());

//cara kerja dari or operator adalah pertama periksa kiri, jika bukan false,null ataupun undefined, maka akan dianggap sebagai true
//sehingga akan mengembalikan nilai dari yang sebelah kiri, tetapi jika falsy (false/null/undefined), maka kembalikan nilai yang
//kanan
//intinya akan mengembalikan nilai dari salah satu operandnya, meskipun operandnya bukan boolean