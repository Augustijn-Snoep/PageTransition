<!DOCTYPE html>
<html lang="nl">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="A single page transition">
        <title>Page Transition</title>
        <link rel="stylesheet" type="text/css" href="dist/css/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap-grid.min.css">
    </head>
    <body class="page--home">

        <div class="page--home__transition">
            <div class="page--home__transition--title">
                <h1>
                    some text
                </h1>
            </div>
        </div>
    
        <?php include('./components/transition.php'); ?>
        <?php include('./components/header.php'); ?>
    
        <main>
            <p>
                Index
            </p>
        </main>
        
        <script src="dist/js/main.js"></script>
    </body>
</html>