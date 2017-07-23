<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
</head>
<body>
<?php
for ($row=0; $row<9;$row++){
    for ($col=0; $col<5; $col++){
        $buttomContent=0;

        if ($row==0 || $row==4 || $row==8){
            $buttomContent=1;
        }
        if ($row>=1 && $row<=3 && $col==0){
            $buttomContent=1;
        }
        if (($row>=5 && $row<=7) && $col==4){
            $buttomContent=1;
        }
        if ($buttomContent==1){
            echo "<button style=\"background-color: blue;\"> $buttomContent</button>";
        } else {
            echo "<button>$buttomContent</button>";
        }
    }
    echo '<br>';
}
?>
</body>
</html>