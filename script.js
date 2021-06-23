$("#emptyDictionary").hide();
$("#wordSearchDiv").hide();
var dictionary = [];

//Pushing submitted word to the end of the array.
function addWord() {
    $("#wordSearchDiv").show();
    $("#emptyDictionary").show();
    var addedWord = document.getElementById("wordAddInput").value;
    dictionary.push(addedWord);
    document.getElementById('wordAddInput').value = '';
    return "The word has been successfully stored in the dictionary!"
}

//Checking if the submitted word is found by Looping through the array;
function searchWord() {
    $("#emptyDictionary").show();
    var searchedWord = document.getElementById("wordSearchInput").value;
    for (let i = 0; i <= dictionary.length; ++i) {
        if (searchedWord.localeCompare(dictionary[i]) == 0) {
            return "The searched word is found in the Dictionary!";
        }
    }
    return "The searched word doesn't exist!"
}

//This will clear the existing array by setting its length to zero;
function empty() {
    document.getElementById("addWord").onclick = function() {
        printMessage(addWord());
    };
    dictionary.length = 0;
    $("#emptyDictionary").hide();
    return " ";
}

//Prints all messages according to parameters it receives from the other functions.
function printMessage(message) {
    return document.getElementById("message").innerHTML = message;
}
