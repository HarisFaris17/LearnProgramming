<?php
// switch beaves just like switch in other programming language. There is variable which inspected, there are cases to choose where that variable fit. In cases we can also just use boolean/just comparison. Or use some value so that when that variable fit the blocked code inside that case will be executed.
    $grade = 0;
    switch($grade){
        case 0:
            echo "the value of grade is 0";
            break;
        case true:
            echo "sample";
            // if we dont use break the program will continue to execute block code inside next case.
             break;
        case $grade>=90:
            echo "You pretty good";
            break;
        case $grade>=80&&$grade<90:
            echo "You got B";
            break;
    }
?>