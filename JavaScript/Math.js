var fraction = Math.random(); //selalu generate antara 1>x>=0
console.log(fraction);

//memberikan nilai integer antara batas bawah dan batas atas
function getInteger(batasBawah,batasAtas){
    return Math.floor((batasAtas-batasBawah+1)*fraction)+batasBawah;
}

console.log(getInteger(7,10))