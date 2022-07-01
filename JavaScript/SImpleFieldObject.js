//jika suatu saat kita ingin mendefinisikan suatu function expression yang mengembalikan objek tetapi tiap property dan value dari property
//tersebut sama dengan parameternya
const haris = (nama,haris,alamat)=>{
    return {
        nama:nama,
        haris:haris,
        alamat:alamat
    }
}
var objectharis = haris("haris","hehe","blok w")
console.log(objectharis);

//ada cara mudah untuk melakukan itu, yakni
const haris2 = (nama,haris,alamat) => {nama,haris,alamat};
var objectharis2 = haris( "haris2","hehehe","blokkkk");
console.log(objectharis2)