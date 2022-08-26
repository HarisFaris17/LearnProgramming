<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
</head>

<body>
    <form action="Calculator.php" method="post">
        <!-- we need to specify the maximum decimal point in HTML -->
        <input type="number" step="0.001" name="num1">
        <input type="text" name="op">
        <input type="number" step="0.001" name="num2">
        <input type="submit" value="submit">
    </form>
    <?php
// simple calculator
    $operator = empty($_POST["op"]) ? null:$_POST["op"];
    $num1 = empty($_POST["num1"])? null:$_POST["num1"];
    $num2 = empty($_POST["num2"])? null:$_POST["num2"];
    if(empty($operator)) exit;
    switch($operator){
        case "+":
            echo $num1+$num2;
            break;
        case "-":
            echo $num1-$num2;
            break;
        case "*":
            echo $num1*$num2;
            break;
        case "/":
            echo $num1/$num2;
            break;
        default:
            echo "your operator false";
    }
    ?>
</body>

</html>