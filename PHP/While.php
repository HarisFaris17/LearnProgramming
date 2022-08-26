<?php
    // while in PHP same as while in other programming language
    $i=5;
    while($i>0){
        echo "$i <br>";
        $i--;
    }

    $array=array("no1","Haris","PRasetyo");
    $j=0;
    while($j<count($array)){
        echo "$array[$j] <br>";
        $j++;
    }
    // do while will run at least one time
    $k=0;
    do{
        echo "$k <br>";
    }while($k<-1)
?>