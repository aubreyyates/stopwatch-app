<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">

        <title>Stopwatch App</title>
        <meta name="description" content="A stopwatch for keeping time">
        <meta name="author" content="Aubrey Yates">

        <link rel="stylesheet" href="css/stopwatch-app/style.css">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">

        <script src='js/stopwatch-app/moment.min.js' ></script>
        <script src='js/stopwatch-app/duration-format.js'></script>

    </head>

    <body>

        <div class='clock-area'>

            <div class='space50'></div>
            <div class='space50'></div>

            <h1>Stopwatch App</h1>

            <div class='space50'></div>


            <?php

                include "widgets/stopwatch-app/stopwatch.php";

            ?>

            <div class='space250'></div>

            <?php

                include "widgets/stopwatch-app/stats.php";

            ?>

        </div>

        <?php

            include "widgets/stopwatch-app/fws-footer.php";

        ?>
        
        
    </body>
</html>