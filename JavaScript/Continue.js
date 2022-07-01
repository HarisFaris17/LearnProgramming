//continur digunakan untuk men-skip 1 iterasi dari loop bisa while dan for atau do while
//jadi code dibawah continue tidak akan dieksekusi
let i=-1;
while(++i<5){
    //disini ketika i mencapai 3 maka logger tidak akan dieksekusi
    if(i==3) continue;
    console.log(i);
}

//for juga sama
for(let i=0;i<10;i++){
    if(i==5) continue;
    console.log(i);
}

//untuk nested loop, jika continnue berada di dalam nested loop maka yang akan di skip adalah 1 iterasi dari nested loopnya, buka loop luarnya
for(j=0;j<5;j++){
    if(j==0) continue;
    for(let i=0;i<10;i++){
        if(i==5) continue;
        console.log(`j = ${j} i = ${i}`);
    }
}
