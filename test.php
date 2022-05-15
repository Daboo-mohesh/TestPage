<?php
$myfile = fopen("https://github.com/Daboo-mohesh/TestPage/blob/4ad595ef5dfeae867c40ad6daf42f8e202d67666/dbx.txt", "w") or die("Unable to open file!");
$txt = "John Doe\n";
fwrite($myfile, $txt);
$txt = "Jane Doe\n";
fwrite($myfile, $txt);
fclose($myfile);
?>