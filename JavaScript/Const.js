//const adalah variabel yang tidak bisa diubah nilainya
const haris = "haris";

console.log(haris);

//error
//haris = "nuke"

//secara konvensi, nama const biasanya berhuruf besar semua
const SENTENCE = "hahahaha";
console.log(SENTENCE);

//array const
const s = [1,2,3];
console.log(s);

//error karena s const
// s= [2,3,4]

//tapi element s bisa diubah dengan cara seperti ini, disebut dengan object mutation
s[0] = 2;
s[1] = 3;
s[2] = 4;
console.log(s);

// kita tidak ingin ada object Mutation, oleh karena itu memakai Object.freeze()
Object.freeze(s);
//tidka error hanya saja, element s tidak bisa di ubah
s[0] = 122;
console.log(s)

/*untuk freeze object sama saja, hanya saja akan mengeluarkan error, tidak seperti array yang tidak mengeluarkan error ketika dimasukkan
nilai baru*/