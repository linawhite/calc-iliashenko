<?php

if(isset($_GET['num1']) && isset($_GET['num2']) && isset($_GET['sign'])) {
    $num1 = $_GET['num1'];
    $num2 = $_GET['num2'];
    $sign = $_GET['sign'];

    switch($sign) {
        case '+':
            $result = $num1 + $num2;
            break;
        case '-':
            $result = $num1 - $num2;
            break;
        case '*':
            $result = $num1 * $num2;
            break;
        case '/':
            if($num2 == 0) {
                echo "Error: Division by zero.";
                exit;
            }
            $result = $num1 / $num2;
            break;
        default:
            echo "Invalid sign.";
            exit;
    }

    echo $result;
} else {
    echo "Error";
}
?>