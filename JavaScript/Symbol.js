// Symbol digunakan sebagai identifier unik 

//karena symbol adalah unik, maka meskipun memiliki 2 vairabel atau lebih yang memiiki symbol yang sama, tetap saja dua variabel tersebut tidak sama.
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1==id2);