<?php
// just like other programming language, function in php can implement recursive concept
function power ($base,$pow){
    if($pow!=0) return power($base,$pow-1)*$base;
    return 1;
}
    echo power(4,3);
    echo "<br>";
function sayHi($name){
    echo "Hello $name";
}

 sayHi("Haris")
?>