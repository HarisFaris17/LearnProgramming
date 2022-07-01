//undefined adalah null yang diberikan oleh mesin sebenarnya null adalah tipe object. undefined terjadi ketika suatu variabel belum diinisialisasi
//secara default tiap parameter suatu fungsi bertipe undefined
function type(x){
    return typeof x;
}

function nullity(x){
    return x;
}

console.log(type());
console.log(type(null));
console.log(nullity());