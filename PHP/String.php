<?php
    $string = "this is string data";
    echo $string[0]; //we can use indexing to return only certain charactor in the string data type
    // we can insert certain character inside a string. BTW a character is considered as string in php
    echo "$string[2] hahahaha ";
    // php is mutable, which means we can modifiy certain index inside array/string
    $string[0]="z";
    echo $string;
    echo "<br>";

    //there are several sring function that we probably use frequently, such as substr, replace_string
    // will grab 2 character starting from index 5 from string $string
    echo substr($string,5,2);
    echo "<br>";
    //will replace certain string that is specified in argument number one with argument number two from string $string
    echo str_replace("data","datum",$string);
?>