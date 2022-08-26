<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input form</title>
</head>
<body>
    <form action="Input.php" method="POST">
        <input type="text" name="name">
        <input type="number" name="age">
        <input type="submit">
    </form>
    <?php
        $age = null;
        $name = null;
        echo $_POST["name"];
        echo "<br>";
        echo  $_POST["age"];
    ?>
</body>
</html>