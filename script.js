$("#emptyDictionary").hide();
$("#listDictionary").hide();
$("#dictionaryWords").hide();
$("#wordSearchDiv").hide();
var dictionary = [], wordsCounter = 0;

//Pushing submitted word to the end of the array.
function addWord() {
    $("#wordSearchDiv").show();
    $("#emptyDictionary").show();
    $("#listDictionary").show();
    var addedWord = document.getElementById("wordAddInput").value.toLowerCase();
    dictionary.push(addedWord);
    document.getElementById('wordAddInput').value = '';
    return "The word has been successfully stored in the dictionary!"
}

//Checking if the submitted word is found by Looping through the array;
function searchWord() {
    $("#emptyDictionary").show();
    var searchedWord = document.getElementById("wordSearchInput").value;
    for (let i = 0; i < dictionary.length; ++i) {
        if (searchedWord.localeCompare(dictionary[i]) == 0) {
            return "The searched word is found in the Dictionary!";
        }
    }
    return "The searched word doesn't exist!"
}

//Displays the entire list of the words added to Dictionary.
function listDictionary(){
    $("#dictionaryWords").show();
    for (let i = wordsCounter; i < dictionary.length; ++i) {
        document.getElementById('dictionaryWords').innerHTML += (i + 1)+ ". " + dictionary[i] + "<br />";
        ++wordsCounter;
    }
}

//This will clear the existing array by setting its length to zero; 
function empty() {
    document.getElementById("addWord").onclick = function() {
        printMessage(addWord());
    };
    dictionary.length = 0;
    wordsCounter = 0;
    $("#emptyDictionary").hide();
    $("#listDictionary").hide();
    $("#dictionaryWords").empty();
    return " ";
}

//Prints all messages according to parameters it receives from the other functions.
function printMessage(message) {
    return document.getElementById("message").innerHTML = message;
}
