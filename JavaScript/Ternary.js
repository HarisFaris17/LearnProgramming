// ternary miriip dengan if hanya saja bisa dalam satu baris, di sebelah kiri ? adalah kondisi dan disebelah kanan adalah expression jika
// kondisi benar dan disebelah : adalah expression jika kondisi salah 
function ternary(something){
    return (typeof something === 'number') ? something+" bertipe number" : typeof something === 'string' ? something+ " bertipe string" : something+" tidak diketahui";
}

console.log(ternary(2));
console.log(ternary('1'))