
var safariAnimals = ["rhino", "elephant", "lion", "tiger", "giraffe", "hippopotamus", "gazelle", "zebra", "buffalo"];
var typesOfSushi = ["unagi", "temaki", "uramaki", "nigiri", "sashimi", "maki" ];
var fruits = ["peaches", "rasberries", "blueberries", "apples", "blackberries","pears", "oranges"];

var allLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w", "x","y","z"];
var guessedLetters = [];
var word ="";
var lives = 6;
var graveyard = [];

function startGame(){
    reload();
    var category = document.getElementById("categories").value;
    console.log(category);
    var rand ="";
    if(category==1){
        rand =  safariAnimals[Math.floor(Math.random() * safariAnimals.length)];
    }
    if(category==2){
        rand = typesOfSushi[Math.floor(Math.random() * typesOfSushi.length)];
    }
    if(category==3){
        rand = fruits[Math.floor(Math.random() * fruits.length)];
    }
    word = rand;
    console.log(rand);



    createButtons();
    printWord();

}
function createButtons(){
    var button = document.getElementById("buttons");
    var letter = "";
    for (var i=0; i<=allLetters.length - 1; i++){
        letter += "<button value= '" + allLetters[i] + "'  id='" + allLetters[i] + "' onclick= 'guessLetter(this.id)'>" + allLetters[i] + "</button>";
    }
    button.innerHTML = letter;
}


function printWord() {
    var answer = "";
    if (lives > 0) {
        for (var j = 0; j < word.length; j++) {
            if (guessedLetters.indexOf(word[j]) !== -1) {
                answer += word[j];
            } else {
                answer += "_ ";
            }
        }

        document.getElementById("correctGuesses").innerHTML = answer;
        console.log(answer);
    }
    if(answer==word){
        document.getElementById("endGame").innerHTML = "Congrats you win! Click play to play again.";
        for(var i=0; i<allLetters.length; i++){
            document.getElementById(allLetters[i]).disabled = true;
        }
    }

    if (lives == 5){
        document.getElementById("hangmanPics").src = "images/6.png";
    }
    if (lives == 4){
        document.getElementById("hangmanPics").src = "images/5.png";
    }
    if (lives == 3){
        document.getElementById("hangmanPics").src = "images/4.png";
    }
    if (lives == 2){
        document.getElementById("hangmanPics").src = "images/3.png";
    }
    if (lives == 1){
        document.getElementById("hangmanPics").src = "images/2.png";
    }
    if(lives<=0){
            document.getElementById("endGame").innerHTML = "You are out of lives :( Click play to play again.";
        for(var l=0; l<allLetters.length; l++){
                document.getElementById(allLetters[l]).disabled = true;
        }
        document.getElementById("hangmanPics").src = "images/1.png";
    }


}

function guessLetter(letter) {
    guessedLetters.push(letter);
    document.getElementById(letter).disabled = true;

    if (word.indexOf(letter) == -1) {
        if (graveyard.indexOf(letter) == -1) {
            lives = lives - 1;
            graveyard.push(letter);

        }

    }
    document.getElementById("lives").innerHTML = "Lives: " + lives;
    document.getElementById("graveyard").innerHTML = "Graveyard: " + graveyard;


    printWord();
}

function reload(){

    guessedLetters = [];
    word ="";
    lives = 6;
    graveyard = [];
    createButtons();
    document.getElementById("lives").innerHTML = "Lives: " + lives;
    document.getElementById("graveyard").innerHTML = "Graveyard: " + graveyard;
    document.getElementById("endGame").innerHTML = "";
    document.getElementById("hangmanPics").src = "";
}

