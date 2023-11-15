<?php

// Check if the required GET parameters are set
if(isset($_GET['num1']) && isset($_GET['num2']) && isset($_GET['sign'])) {
    // Retrieve the values from $_GET
    $num1 = $_GET['num1'];
    $num2 = $_GET['num2'];
    $sign = $_GET['sign'];

    // Perform the operation based on the sign
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
            // Check for division by zero
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

    // Output the result
    echo $result;
} else {
    echo "Error";
}
?>