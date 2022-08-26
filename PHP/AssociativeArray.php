<?php
    // array in php can also behave like object in javascript, every properties has its key and value
    $associative_array = array("no1"=>"Haris","no2"=>"Nuke",3=>"Aila");
    echo $associative_array["no1"];
    echo "<br>";
    echo $associative_array[3];
    echo "<br>";
    echo $associative_array["no2"];
    echo "<br>";

    // we can change the value too
    $associative_array[3]="Ibu";
    echo $associative_array[3];
    // we can add new property
    echo "<br>";
    $associative_array["new key"]="new value";
    echo $associative_array["new key"];
?>