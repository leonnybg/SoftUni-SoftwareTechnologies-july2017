<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
    <form>
        N: <input type="text" name="num" />
        <input type="submit" />
    </form>
    <?php
    if (!isset($_GET['num'])){
        exit(1);
    }
    $num=intval($_GET['num']);
    $trig1=1;
    $trig2=1;
    $trig3=2;
    echo $trig1 . " ";
    echo $trig2 . " ";
    echo $trig3 . " ";
    for ($i=3; $i<=$num-1;$i++){
        $trig4=$trig1+$trig2+$trig3;
        $trig1=$trig2;
        $trig2=$trig3;
        $trig3=$trig4;
        echo $trig3 . " ";
    }
    ?>
</body>
</html>