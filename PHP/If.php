<?php
    // if in php just like if in any other programming language
    if(true) echo "this is true";
    else echo "won't appear";
    echo "<br>";
    // can use comparison, since comparison will return boolean
    if(87>86) echo "of course 87 is greater than 86, hence this will show up";
    // same thing applied to variable
    $variable = 9999;
    if($variable==888) echo "this wont appear";
    else echo "this will appear";

    // try grade as in school
    $grade = 80;
    if($grade>=80) echo "you got A";
    else if($grade>=70&&$grade<80) echo "you got B";
    else if($grade>=60&&$grade<70) echo "you got C";
    else if($grade>=50&&$grade<60) echo "you got D";
    else echo "you have to struggle next time";
?>