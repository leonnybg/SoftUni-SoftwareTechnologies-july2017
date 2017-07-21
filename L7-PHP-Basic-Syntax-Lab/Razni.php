<?php
$count = 20; // variable $count, value 20 (integer)
echo $count . '<br>'; // 20 <br>
echo gettype($count); // integer
var_dump($count); // int 20
if (isset($count))
    echo $count; // 20
unset($count);
echo $count;
?>
<?php $month = intval(date("m")); ?>
<?php if ($month >= 6 && $month <= 8) { ?>
    <p>It is month:<?=date("F")?>, a summer time!</p>
<?php } else { ?>
    <p>Sorry, not summer.</p>
<?php } ?>

