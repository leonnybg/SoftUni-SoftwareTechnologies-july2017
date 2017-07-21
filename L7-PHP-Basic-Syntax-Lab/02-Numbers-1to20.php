<ul>
    <?php for ($i=1;$i<=20; $i++) :  ?>
        <?php if ($i%2==0): ?>
            <li><span style="color: green"><?= $i?></span></li>
        <?php else: ?>
            <li><span style="color: blue"><?php echo $i; ?></span> </li>
        <?php endif ?>
    <?php endfor ?>
</ul>

//With Ternren operator
<ul>
    <?php for($i=1;$i<=20;$i++):?>
        <?php $color = $i%2==0 ? "green":"blue";?>
        <li><span style="color: <?=$color;?>"><?= $i;?></span> </li>
    <?php endfor ?>
</ul>