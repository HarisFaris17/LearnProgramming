<?php
    class Person{
        // public same as var
        public $name;
        // remember that private attributes in super class are not visible to the child class, therefore it can only be accessed through parent class function
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

    // we can inherit the attributes from the parent class Person
    // suppose that professor have additional attribute that is NIP and Courses that it teach
    class Professor extends Person{
        public $courses;
        private $NIP;

        function __construct($courses,$NIP,$name,$dateOfBirth,$id){
            //since parent class needs argument therefore we should pass argument from child class to the parent class also
            parent::__construct($name,$dateOfBirth,$id);
            $this->courses=$courses;
            $this->NIP=$NIP;
        }

        function teach(){
            echo "The professor $this->name teaching $this->courses";
        }
        function getNIP(){
            return $this->NIP;
        }
        function setNIP($NIP){
            $this->NIP=$NIP;
        }
    }

    $pakaziz=new Professor("IoT","CCCCCC","Pak Aziz Wisnu Nugraga","18 May 1999","xxxxxxxx");
    $pakaziz->teach();
?>