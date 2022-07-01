
function testEqual(var1,var2){
    //akan mengecek tipenya dulu, jika tidak sama maka samakan tipenya salah satu variabel terhadap yang lain, 
    //lalu membandingkan nilainya, jika sama maka true
    if(var1==var2){
        return true;
    }
    return false;
}

function testStrictEqual(var1,var2){
    //akan mengecek nilai dan juga tipenya
    if(var1===var2){
        return true;
    }
    return false;
}

console.log(testEqual(10,"10"));
console.log(testStrictEqual(10,"10"))