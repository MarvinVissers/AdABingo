
/**
 * File with all main JavaScript functions
 */
// Making a list with all bingo card options
const bingoTextOptions = ["Dennis vergeet zichzelf te muten", "Dennis weet niet hoe rode lijntjes weghaalt", "Dennis heeft een vraag over zijn computer", "Dennis snapt niet hoe je Getters/Setters kan genereren", "Dennis heeft problemen met Corona maatregelen", "Dennis doet flexen over zijn leven buiten school", "Stan vertelt dat hij homo is", "Stan vertelt over de Goese schijf van 5", "Dennis snapt niet wat een error betekend", "Robin heeft een vraag die niets met te les te maken heeft", "Walter wilt een les verplaatsen", "Robbie hergebruikt een presentatie", "Iemand verlaat de les nadat ze merken dat het herhaling is", "Wij beginnen een discord call in plaats van een opdracht maken", "Frans praat over de ABN AMRO", "Peter geeft nutteloze opdrachten", "Thomas wil geen goed antwoord geven", "Thomas is het eens met ons maar mag het niet toegeven", "Iemand mute dennis terwijl hij praat", "Stan vertelt dat hij verse frikandelbroodjes heeft gehaald", "Marvin schrijft iemands hele project", "Dennis komt te laat", "Joep discussieert iemand de grond in", "Joep dreigt een mail naar de leraren te sturen", "Marvin komt op vrijdag te laat", "Luuk heeft geen zin om zijn eigen BoeBot te gebruiken", "Walter staat achter iemand tijdens de Boebot met koffie in zijn hand", "Joep noemt iemand een cutie", "Iemand (behalve Stan) maakt een gay opmerking", "Rutger gunt code", "Robin heeft het over Elon Musk", "Iemand komt erachter dat Joey een gigantische Sixpack heeft", "Luuk vergeet zijn MySQL port te veranderen", "Luuk komt met een domme vraag omdat hij iets verkeerd geschreven heeft", "Stefan is gelukkig", "Lars heeft het erover dat zijn werk belangrijker is als school", "Peter/Thomas lachen Dennis uit", "Peter heeft zijn baard geschoren", "Iemand vergeet zijn mondkapje en wordt erop aangesproken", "Iemand zijn laptop werkt niet", "Thomas geeft een non-antwoord", "Robbie zijn les duurt veel te kort", "Iemand zit met zijn handen aan Luuk zijn privé handalcohol pomp", "Thomas helpt Dennis wanneer iedereen weg is", "De conciërge zegt dat er afstand gehouden moet worden", "Joucke zegt een if-statement", "Stan vertelt over zijn headset", "Dennis vraagt de basis kennis", "Dennis kan de knop niet verwijderen", "Dennis weet niet wat MVC is", "Dennis weet niet hoe een Pane werkt", "Dennis vraagt hoe hij zijn project moet noemen", "Dennis heeft een simpele fout in zijn code en weet deze niet op te lossen", "Lars praat over een Biertje", "Lars praat over echt complete bagger", "Iemand klaagt over het zoeken naar stage", "Conciërge spreekt Dennis aan", "Luuk moet langs de Appie", "Joep roast Dennis", "NS heeft vertraging", "De les duurt minder dan 30 minuten", "Robin geeft aan dat hij wel nuttig zou zijn als die in JavaScript mocht programmeren", "emand valt voor een pyramid scheme", "Joey laat zijn sixpack zien", "Dennis gaat opdrukken", "Joep pest Dennis over zijn aandelen", "Dennis flext over zijn aandelen", "Robbie’s les is nuttig", "Thomas gaat weer lopen fanboyen over Apple", "Frans past het BP template aan of heeft er een nieuwe opmerking over", "Dennis klaagt over het mondkapje", "Dennis stelt een vraag die 5 minuten geleden al beantwoord is", "Je kan in Robbies gezicht zien dat die moe wordt van Dennis zijn vragen", "Iemand mute Dennis", "Goes", "Slimme jongen geeft het antwoord om de les op te schieten", "Walter stelt een goeie vraag", "Rutger doet zich weer beter voor dan dat die is", "Er wordt een GOEDE meme gemaakt over iets doms wat Dennis doet", "Frans geeft les over iets wat we nooit gaan gebruiken", "Luuk verslaapt zich", "Joucke gaat sporten in plaats van naar de les", "Robin klaagt over hardware", "Robbie maakt het voorbeeld project die we al 100x hebben gemaakt", "Luuk kan niet sporten", "Iemand maakt een ‘klein’ grap tegen Rick", "Luuk klaagt over t feit dat het lang duurt voordat die weer thuis is", "Luuk schept op over het feit dat die mag kiezen tussen meerdere stagebedrijven", "Er wordt een stofzuiger aangezet", "Stan vertelt zijn levensverhaal met teveel informatie dat niemand boeit", "Rebecka is er", "Robbie wordt onderbroken door zijn kinderen", "Dennis krijgt privé les", "Robbie leert ons opnieuw om getters en setters te maken", "Engels is weer leerzaam /s", "Joep zegt weer iets controversieel", "Thomas is apple geil", "Iemand maakt een flauwe grap over 2 presentaties voor Engels", "Dennis heeft een corona party", "Dennis doet het loopje", "Luuk heeft een vest aan", "Iemand zegt dat tie vrijstelling heeft voor Engels", "Frans hoort de vraag niet", "Joucke heeft een hele les weer niks gedaan", "BP3 Solutions wordt vernoemd", "Rick zegt dat anime hentai is", "Joucke speelt COD of CS:GO tijdens de les", "Robin gaat eerder weg bij de HWI lessen", "Joep vertelt dat zijn vader hem vroeger onder zijn kont schopte", "Joep noemt een anime schijt", "Joep noemt de beveilig slecht", "Iemand neemt “gratis” koffie", "Iemand neemt een broodje van de kantine", "Luuk heeft op Chrome een hentai achtergrond", "Luuk vertelt dat hij veel te vroeg wakker moest worden", "Rick vraagt Thomas om de slagboom voor hem open te doen", "Iemands pc bluescreent", "Marvin eet een rouw Kaiserbroodje", "Iemand maakt een grap dat ze hier geen collegegeld voor betalen", "Iemand maakt een uitschrijf grap", "Iemand vraagt hoe Remco of Marvin Boschman het nu doen", "Iemand heeft een nieuw kutverhaal over Paul", "De ‘Kom je daar nu pas achter’ sticker wordt gebruikt", "Luuk/Joep probeert een loophole te vinden", "Rick vraagt aan Thomas of zijn manier technisch nog geldig is voor een BP", "Stefan laat een cursed image zien", "Iemand ziet het leven niet meer zitten", "Stefan stuurt een video waar de enige reactie WTF op is", "Iemand stuurt een Call of Duty reddit post", "Luuk stuurt een zelfgemaakte meme", "Iemand maakt een meme over de les", "Er is shame dat er geen Dark mode gebruikt wordt", "Luuk noemt iets racistisch niet racistisch omdat het waar is", "Marvin geeft aan hoeveel die zelf moet gaan doen voor het project", "Marvin schrijft te veel documentatie", "Stefan wil sterven door Middelbare scholieren", "Stefan showt zijn Monsterverzameling", "Joep maakt een grap over zijn kelder", "Rick koopt Red Bull", "Marvin schrijf teveel comments", "Marvin maakt een onnodige functie voor zijn project", "Marvin noemt iemands front-end schijt", "Joucke draagt een joggingpak", "Joucke haalt een beroepsproduct niet", "Joucke steelt iemands documentatie voor zijn herkansing", "De leraar moet iemand aanspreken over mondkapjes", "Walter maakt een grap over zijn reistijd", "Stan zegt dat hij iets al op het HBO heeft gedaan", "Iemand klaagt over het tempo van zelfstandigheid", "Rebecka is veel te actief in WhatsAPP", "Iemand gebruikt een Rafik sticker op WhatsAPP", "Luuk klaagt over het feit dat front-end gay is", "Rick komt met de trein naar school", "Rick wil Luuk meenemen naar de Burger King in zijn auto", "Iemand wil een voldoende herkansen", "Joucke/Luuk maakt HAVO maar had VWO kunnen doen grap", "Rebecka stuurt een uur voor de les dat ze ‘helaas niet aanwezig kan zijn’", "Het nakijken duurt weer te lang", "Thomas geeft ons gelijk over iets wat de school slecht doet", "Joep noemt iets kansloos", "Luuk/Joep doet eigenwijs", "Stan stuur weer troep op WhatsApp", "Joucke doet alles op de laatste dag", "Walter klaagt dat zijn hoge cijfer te laag is", "Marvin leaved de Engels les als eerste", "Rick maakt zijn makkelijke Engels zinnetjes weer fout", "Studenten hebben het naar hun zin tijdens de stagemarkt", "Er zijn minder dan 3 mensen aanwezig als Engels begint", "Iemand wordt getagd in een tiktok", "Iemand kijkt dromerig naar Joey", "Joucke verbetert iemands taalgebruik", "Joucke wordt verbeterd", "Luuk heeft zin in fastfood", "Robin “flext” over zijn koreaanse vriendin", "Iemand voelt zich beledigd door de bingo", "Dennis snapt Dit/Dat/Die/Deze niet", "Iemand heeft zin in Kippie", "Robin heeft het over zijn neef die hem wel ‘helpt’ met zijn code", "Peter heeft het over de engineering opleiding", "Remco geeft een andere naam Peter dan zijn eigen naam", "Iemand klaagt over de batterij van de Boebot", "Lars vindt iets wat niet grappig is, enorm grappig", "Lars geeft aan dat die ‘niet veel’ gedronken heeft in het weekend", "Rebecka helpt mee aan de BP6 documentatie", "Robin heeft het over efficiëntie", "Robin heeft het over gameverslaving", "We krijgen uitleg over solliciteren", "Frans lacht om zijn eigen grap, verder alleen iemand uit medelijden", "Lars heeft het over zijn band", "Lars begint een gesprek met Robbie over bier", "Robin heeft het over Zuid-Korea", "Joey geeft aan dat hij het onzin vindt dat we met hardware bezig zijn", "Iemand noemt Luuk een dikzak", "Paul zegt dat wij de groepsApp niet goed gebruiken", "Iemand benoemt Fransje Pansje Kevertje", "Iemand kan niet op school zijn door Corona klachten", "Iemand vraagt aan Frans of het onderwerp niet nutteloos is waarop hij antwoord dat je het ooit misschien kan gebruiken", "Walter heeft kritiek op de Boebot code om te draaien", "Iemand maakt een opmerking dat Rosetta Stone ook bestaat", "De mensen die een vrijstelling hebben voor Engels flexen ermee", "Stefan klaagt over de bussen in Dordrecht", "Frans legt de vorige les binnen 15 minuten uit", "Rebecka draagt een mondkapje in de klas", "Stefan heeft al 4 boterhammen voor 11 uur op", "Iemand maakt iets wat er in de groepsapp gezegd is belachelijk in de ‘zonder leraren chat’", "Walter start een vraag met een uitleg van een half uur waar die eigenlijk helemaal niks zegt", "Luuk en Joep doen een combo attack", "Terwijl iedereen een moeilijke opdracht aan t maken is heeft Stefan het opeens af", "Rick heeft geen zin gehad om zijn haar te doen, dus zet een petje op", "Het BP6 template/rubrics veranderd", "Niemand in de klas snapt wat er precies van ons verwacht wordt", "Stefan geeft zijn aluminiumfolie bal aan Luuk/Joep", "Tijdens het maken van een HWI filmpje zegt er iemand iets doms op de achtergrond", "Thomas vraagt om feedback waar hij niets mee gaat doen", 
"Stefan is als eerste helemaal klaar met de dag", "Thomas stopt veel te veel moeite in een presentatie", "Stefan klaagt over zijn broertje", "Frans zijn les gaat totaal niet over BP", "Er staat een meme in de presentatie", "De presentatie eindigt met ‘Thats all Folks’", "Joep klaagt dat zijn cpu/gpu nog niet binnen is", "Luuk klaagt over de PS5", "Marvin maakt een vreselijke woordgrap", "Walter haalt als enige ergens een goed punt voor", "Walter zegt dat hij Luuks stage afpakt", "Mensen van het MBO zeggen dat ze iets op het MBO hebben gehad dat nu niemand snapt", "Rick komt te laat voor een afspraak op Discord", "Rick spoort mensen aan om te gamen in plaats van school", "Rick deelt zijn scherm in Discord tijdens een les", "Luuk wordt gepest met zijn GayStation", "Rick wil een nieuwe muis bestellen", "Walter doet alsof hij mee heeft geholpen met de code schrijven door erbij te staan", "Paul vindt het te laat voor iets", "Rick quote: “Let’s go chestday”", "Stan heeft dit al eens gehad op zijn vorige opleiding", "Rick volgt de les vanuit bed", "Robin zegt dat iets beter in JavaScript gedaan kan worden", "Joep zegt dat iets beter in python kan worden geschreven", "Lars wil graag paprika eten", "Iemand pakt gratis eten van de kantine maar vindt het eigenlijk helemaal niet lekker", "De kantinejuffrouw laat dingen staan voor ons", "Er gaat een deurbel bij iemand", "Frans lacht na een opmerking", "Joep/Lars heeft het over een grote banaan", "Frans is op mute zonder dat hij het doorheeft", "Marvin is te slim voor zichzelf", "Iemand gebruikt Luuk als rubber eendje", "Marvin praat om het probleem heen", "Iemand vraagt aan Frans/Thomas wat er in de rubrics staat", "Robin zegt dat Marvin leraar moet worden", "Iemand loopt een Boebot omver", "Frans ‘legt’ de rubrics weer eens uit", "Joucke gaat direct uit school sporten", "Rick klaagt over zijn toetsenbord", "Rick wordt boos omdat Luuk zijn headset niet op heeft", "Joey draagt te dure merkkleding", "Joey houdt zich stil", "Joey gooit straattaal", "Rutger doet te kakker", "De BoeBot crashed 5x bij 1 persoon op 1 dag", "Rutger loopt veel te ver voor", "Rebecka zoekt aandacht door random stickers te sturen", "Rebecka geeft too much information", "Peter zegt iets over Avans", "Stan heeft het over de brandweer", "Lars heeft er erover dat hij nieuwe mensen ontmoet heeft terwijl hij dronken was", "Stan maakt een Gay opmerking", "Stan vraagt iemand om een meme over Dennis te maken", "Stan stuurt gay memes in de groepsapp", "Peter benoemt dat zijn zoon op de KSE heeft gezeten", "Lars en Peter hebben een gesprek over de leraren van de KSE", "Lars is nog aangeschoten in de les", "Lars laat rare filmpjes zien", "Joucke vraagt hulp", "Marvin maakt het zichzelf veel te moeilijk", "Marvin lacht iemand zijn code uit, maar helpt daarna wel met het oplossen", "Marvin heeft het al af", "Thomas gebruikt een achtergrond van een foto in de school", "Robbie legt uit hoe je een GUI in een andere class maakt", "Thomas draagt een Adidas shirt", "Thomas slaat op zijn horloge om de powerpoint vooruit te helpen", "Peter geeft aan dat hij de code niet begrijpt", "Iemand maakt een ‘Yo Mama’ joke", "Iemand die de les online live kijkt, maakt een screenshot waarop iemand iets doms doet in de achtergrond", "Thomas geeft aan dat we voor hardware eigenlijk bij Peter moeten zijn", "De Engels vrijstelling mensen geven aan 2 presentaties te willen doen", "Janet wordt oud genoemd", "Marvin zijn internet begeeft het", "Iemand zegt tegen Joucke dat hij windows moet activeren", "Een meme uit oude beroepsproducten wordt teruggehaald", "De conciërge gaat bitchen over corona-regels", "Marvin mist de grap omdat hij geen camera's kan zien", "5 mensen zitten aan de energie tijdens de les", "Iemand kan de Teams call niet in komen", "Joep dreigt met de examencommissie", "Rick gaat XQC kijken ipv documentatie schrijven", "Iemand vindt dat iets niet in de bingo moet", "Iemand kan een bestand niet vinden op BB", "Iemand vraagt of Robbie’s code op BB komt", "Iemand deelt een grap van r/programmerhumor", "Stan start de Teams call ", "Frans vraagt of er vragen zijn", "Rick wordt gebeld door zijn vriendin", "Joep heeft 4 dagen niet geslapen", "De uitleg van een les is minder dan 30 minuten", "Rick zegt poggers/pogshark/pogchamp", "De inleverlink staat niet online/werkt niet", "Rick stuurt gewoon zijn github ipv te helpen", "Stefan vertelt een verhaal over VR-chat", "Stefan gebruikt een emote van zichzelf", "Presentatie eindigt. met “That’s all folks”", "Stefan stuurt een discord berichtje, omdat hij niet wil dat iedereen hoort wat die zegt", "Robin heeft het over wetenschappelijke experimenten", "Robin gaat vasten", "Robin heeft het over Amerikaanse politiek", "Iemand maakt een ranzig over seksueel geluid", "Walter doet alsof hij nog cum laude kan slagen", "Marvin zegt dat hij Wordpress vreselijk vindt", "Marvin opent een kladblok om iets op te schrijven of uit te leggen", "We zitten tot 16:00 op school bij HWI", "Professionele vaardigheden is nog geen 15 minuten lang"];
let bingoTextOptionsUsed = [];
let bingoOpionsChecked = [];

/**
 * Function to fill the bingo items
 */
function fillBingoItems(categorie, savedBingoItems) {
    // Getting all bingo card items
    var bingoItems = document.getElementsByClassName("bingo-card__item");

    // Filling the items
    loopThroughBingoItems(bingoItems, 0);

    return bingoTextOptionsUsed;
}

/**
 * Function to fill the bingoItems
 * @param {*} bingoItems array with all the items
 * @param {*} offset offset of the bingoitems array
 */
function loopThroughBingoItems(bingoItems, offset) {
    // Getting a single item
    const item = bingoItems[offset];
    // Getting the single item id
    var itemId = item.id;
    // Getting the single item span id
    var bingoItem = document.getElementById("bingoText" + itemId);

    // Getting a bingo option
    var bingoOption = getRandomBingoOption();

    // Checking if its used
    if (!bingoTextOptionsUsed.includes(bingoOption)) {
        // Getting the option
        bingoItem.innerHTML = bingoTextOptions[bingoOption];
        // Setting the option in the item
        bingoTextOptionsUsed.push(bingoOption);
        // Setting a higher offset
        offset++;
    }

    // Going through the function again
    loopThroughBingoItems(bingoItems, offset);
}

function getRandomBingoOption() {
    var random = Math.floor(Math.random() * bingoTextOptions.length);
    return random;
}

/**
 * Function to check of bingo item
 * @param {*} id the bingo item id
 */
function checkOffItem(id) {
    // Getting the bingoItem
    var bingoItem = document.getElementById(id);

    bingoItem.classList.toggle("bingo-card__item--checked");
}

function viewBinogCard() {
    // Hiding the categorie and showing the bingo card
    document.getElementById("categorie").classList.add("categorie--hide");
    document.getElementById("bingoCard").classList.remove("hide");
}
