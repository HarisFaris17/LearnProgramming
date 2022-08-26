<?php
    class Animal{
        var $age;
        var $name;
        var $height;
        function __construct(){
            echo "Instance of Animal created <br>";
        }
    }
    // we can instantiate a class that has no parameter in its constructor without parentheses ()
    $lion=new Animal;
    // change its attribute's value
    $lion->age = 12;
    $lion->name="Lion";
    $lion->height=90;

    echo $lion->height;

    // we can make class(s) with construct with parameter(s)
    class Person{
        // public same as var
        public $name;
        private $dateOfBirth;
        private $id;

        function __construct($name,$dateOfBirth,$id){
            $this->name=$name;
            $this->dateOfBirth=$dateOfBirth;
            $this->id=$id;
            echo "Instance of person created <br>";
        }

        function getName(){
            return $this->name;
        }
        function getDateOfBirth(){
            return $dateOfBirth;
        }
        function getId(){
            return $id;
        }
        function setId($id){
            $this->id=$id;
        }
        function setDateOfBirth($dateOfBirth){
            $this->dateOfBirth=$dateOfBirth;
        }
        function setName(){
            $this->name=$name;
        }

    }
    // when instantiating a class which has parameter(s) on its constructor we should specify each argument(s), so the attribute(s) of that instance is not null
    $haris = new Person("Haris","17 May 20000","xxxxxxxxxj");
?>