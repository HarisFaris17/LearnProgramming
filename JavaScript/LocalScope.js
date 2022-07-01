var test = "test";

function haris(){
    //variabel yang memiliki nama sama di dalam fungsi memiliki prioritas dibanding global variabel
    var test = "test di haris";
    console.log(test);
}

haris();
console.log(test);