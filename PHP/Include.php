<?php
    // when including some another php file, the included file will be executed
    // as a proof, Class.php will echo Instance Person created, etc... .
    // include and require are the same, but the only difference is if there is error in the file that included using require statement, the execution will be stoped whereas when we use include if there is error the execution will not stop, it only gives warning
    include "HeaderInclude.html";
    require 'Inheritance.php';
    $HarisPrasetyo = new Professor("Sistem Kendali","xxxxxx","Haris Prasetyo","17 May 2000","3215xxxxxxxx");
    $HarisPrasetyo->teach();
    require "FooterInclude.html";
?>