<?php
 $firstname = $_GET['firstname'];
 $lastname = $_GET['lastname'];
 $age = $_GET['age'];
 $email = $_GET['email'];
 echo "<h3>Response Form</h3><h4> ";
 echo "You submitted the following information<br><ul>";
 echo "<li>Name Lastname: <strong> $firstname  $lastname</strong></li>";
 echo "<li>Age: $age</li>";
 echo "<li>E-mail: $email</li>";
 echo "</li></ul></h4>";
 echo "Form recieved at: <br>";
 echo "Date: " . date("Y/m/d") . "<br>";
 echo "Time: " . date("H:i:s");
 ?>
