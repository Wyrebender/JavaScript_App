<?php
$connection=mysql_connect('localhost', 'root', 'root') or die(mysql_error());
$dbsel=mysql_select_db('francohaley_swa', $connection) or die(mysql_error());
?>