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
    $factorial = 1;
    while ($num>=1){
        $factorial=$factorial*$num;
        $num--;
    }
    echo $factorial;
    ?>
</body>
</html>