<?php
    require("functions.php");

    $functions = new Functions();

    $listAccounts = $functions->getAccounts();
?>

<!DOCTYPE html>
<html lang="nl">
    <head>
        <!-- Meta tags, information for the browser -->
        <meta charset="UTF-8">
        <meta name="description" content="Speel mee met de ADA-Informatica bingo">
        <meta name="author" content="Joucke Burger, Joep Zegers, Luuk Witters, Marvin Vissers en Rick Deurloo">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>ADA Informatica Bingo</title>

        <!--Preloading all important things-->
        <link rel="preload" href="assets/bootstrap/css/bootstrap.min.css" as="style">
        <link rel="preload" href="assets/styling/css/main.min.css" as="style">

        <!-- Linking to Bootstrap CSS -->
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">

        <!-- Linking to own CSS -->
        <link rel="stylesheet" href="assets/styling/css/main.min.css">

        <!--Linking to custom font Roboto and Roboto Mono -->
        <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono&display=swap" rel="stylesheet"> 

        <!-- Linking to icons -->
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    </head>

    <body>
        <main class="bingo">
            <section id="categorie" class="container categorie">
                    <div class="row">
                        <div class="col-sm-12">
                            <h2 class="categorie__title">Selecteer je naam</h2>
        
                            <form action="" method="post">
                                <select name="cbxName" class="form-control">
                                    <?php
                                        for ($i=0; $i < count($listAccounts); $i++) { 
                                            ?>
                                                <option value="<?php echo $listAccounts[$i]["name"]; ?>"><?php echo $listAccounts[$i]["name"]; ?></option>
                                            <?php
                                        }
                                    ?>
                                </select>
                            </form>
                        </div>
                    </div>
                </section>

            <section id="categorie" class="container categorie">
                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="categorie__title">Kies een categorie</h2>
    
                        <ul class="categorie__list">
                            <li class="categorie__item"><button class="btn-primary" id="school" onclick="showCard('School')">School</button></li>
                            <li class="categorie__item"><button class="btn-primary" id="online" onclick="showCard('Online')">Online</button></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="bingoCard" class="container bcard hide">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="bingo__title">ADA Informatica Bingo</h1>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-12">
                        <div class="bingo-card">
                            <!-- Row 1 -->
                            <div class="bingo-card__item" id="11" onclick="checkOffItem(11)">
                                <span class="bingo-card__text" id="bingoText11"></span>
                            </div>

                            <div class="bingo-card__item" id="12" onclick="checkOffItem(12)">
                                <span class="bingo-card__text" id="bingoText12"></span>
                            </div>

                            <div class="bingo-card__item" id="13" onclick="checkOffItem(13)">
                                <span class="bingo-card__text" id="bingoText13"></span>
                            </div>

                            <div class="bingo-card__item" id="14" onclick="checkOffItem(14)">
                                <span class="bingo-card__text" id="bingoText14"></span>
                            </div>

                            <div class="bingo-card__item" id="15" onclick="checkOffItem(15)">
                                <span class="bingo-card__text" id="bingoText15"></span>
                            </div>

                            <!-- Row 2 -->
                            <div class="bingo-card__item" id="21" onclick="checkOffItem(21)">
                                <span class="bingo-card__text" id="bingoText21"></span>
                            </div>

                            <div class="bingo-card__item" id="22" onclick="checkOffItem(22)">
                                <span class="bingo-card__text" id="bingoText22"></span>
                            </div>

                            <div class="bingo-card__item" id="23" onclick="checkOffItem(23)">
                                <span class="bingo-card__text" id="bingoText23"></span>
                            </div>

                            <div class="bingo-card__item" id="24" onclick="checkOffItem(24)">
                                <span class="bingo-card__text" id="bingoText24"></span>
                            </div>

                            <div class="bingo-card__item" id="25" onclick="checkOffItem(25)">
                                <span class="bingo-card__text" id="bingoText25"></span>
                            </div>

                            <!-- Row 3 -->
                            <div class="bingo-card__item" id="31" onclick="checkOffItem(31)">
                                <span class="bingo-card__text" id="bingoText31"></span>
                            </div>

                            <div class="bingo-card__item" id="32" onclick="checkOffItem(32)">
                                <span class="bingo-card__text" id="bingoText32"></span>
                            </div>

                            <div class="bingo-card__item" id="33" onclick="checkOffItem(33)">
                                <span class="bingo-card__text" id="bingoText33"></span>
                            </div>

                            <div class="bingo-card__item" id="34" onclick="checkOffItem(34)">
                                <span class="bingo-card__text" id="bingoText34"></span>
                            </div>

                            <div class="bingo-card__item" id="35" onclick="checkOffItem(35)">
                                <span class="bingo-card__text" id="bingoText35"></span>
                            </div>

                            <!-- Row 4 -->
                            <div class="bingo-card__item" id="41" onclick="checkOffItem(41)">
                                <span class="bingo-card__text" id="bingoText41"></span>
                            </div>

                            <div class="bingo-card__item" id="42" onclick="checkOffItem(42)">
                                <span class="bingo-card__text" id="bingoText42"></span>
                            </div>

                            <div class="bingo-card__item" id="43" onclick="checkOffItem(43)">
                                <span class="bingo-card__text" id="bingoText43"></span>
                            </div>

                            <div class="bingo-card__item" id="44" onclick="checkOffItem(44)">
                                <span class="bingo-card__text" id="bingoText44"></span>
                            </div>

                            <div class="bingo-card__item" id="45" onclick="checkOffItem(45)">
                                <span class="bingo-card__text" id="bingoText45"></span>
                            </div>

                             <!-- Row 5 -->
                             <div class="bingo-card__item" id="51" onclick="checkOffItem(51)">
                                <span class="bingo-card__text" id="bingoText51"></span>
                            </div>

                            <div class="bingo-card__item" id="52" onclick="checkOffItem(52)">
                                <span class="bingo-card__text" id="bingoText52"></span>
                            </div>

                            <div class="bingo-card__item" id="53" onclick="checkOffItem(53)">
                                <span class="bingo-card__text" id="bingoText53"></span>
                            </div>

                            <div class="bingo-card__item" id="54" onclick="checkOffItem(54)">
                                <span class="bingo-card__text" id="bingoText54"></span>
                            </div>

                            <div class="bingo-card__item" id="55" onclick="checkOffItem(55)">
                                <span class="bingo-card__text" id="bingoText55"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- Linking to javascript -->
        <script src="assets/script/webstorage.js"></script>
        <script src="assets/script/main.js"></script>

        <script>
            // Showing card on categorie choice
            function showCard(categorie) {                
                // Showing the bingo card
                viewBinogCard();

                if (getBingoItems() == null) {
                    // Filling the bingo items
                    var bingoItemsUsed = fillBingoItems(categorie, null);
                    setBingoItems(bingoItemsUsed);
                } else {
                    fillBingoItems(categorie, getBingoItems())
                }
            }
        </script>
    </body>
</html>