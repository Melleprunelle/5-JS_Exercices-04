var selectElementsStartingWithA = function(array) {
    var i = 0;
    var tab = [];
    for (i; i < array.length; i++) {
        if (array[i].indexOf("a") === 0)
            tab.push(array[i]);     
    }
    return tab;
}

var selectElementsStartingWithVowel = function(array) {
    var tab = [];
    
    for (var i = 0; i < array.length; i++) {
        var premierCarac = array[i].charAt(0);
        
            if ( premierCarac.match(/[aeiouy]/) ) {
                tab.push(array[i]);     
            }
    }
    return tab;
}

var removeNullElements = function(array) {
    var i = 0;
    var tab = [];
    
    for (var i = 0; i < array.length; i++) {
            if (array[i] !== null) {
                tab.push(array[i]);   
            }
    }
    return tab;
}

var removeNullAndFalseElements = function(array) {
    var i = 0;
    var tab = [];
    
    for (var i = 0; i < array.length; i++) {
            if (array[i] !== null && array[i] !== false) {
                tab.push(array[i]);   
            }
    }
    return tab;
}

var reverseWordsInArray = function(array) {
    var i = 0;
    var tab = [];
    
    for (var i = 0; i < array.length; i++) {
            var x = array[i].split("").reverse().join("");
            tab.push(x);
    }
    return tab;
}

var everyPossiblePair = function(array) {
    var tab = array.sort(function(a,b,c){a+b && a+c && b+c && b+a});
    return tab;
}

var allElementsExceptFirstThree = function(array) {
    var result = array.splice(0,3);
    return array;
}

var addElementToBeginning = function(array, element) {
    var result = array.unshift(1);
    return array;
}

var sortByLastLetter = function(array) {
    var tab = []
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].split("").reverse().join("");
    }
    array.sort();
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].split("").reverse().join("");
    }
    return (array);
}

var getFirstHalf = function (string) {
    var result = "";
    for (var i = 0; i < Math.ceil(string.length / 2); i++) {
        result += string.charAt(i);
    }
    return result;
}

var makeNegative = function(number) {
    if (number > 0){
        number = number * -1;
    }
    return number;
}

var numberOfPalindromes = function(array) {
    var tab = [];
    for (var i = 0; i < array.length; i++) {
        
        if (array[i] === array[i].split("").reverse().join("")) {
            tab.push(array[i]);
        }
    }
    return tab.length;
}

var shortestWord = function(array) {
    array = array.sort(function(a,b){return a.length - b.length});
    return array[0];
}


var longestWord = function(array) {
    array = array.sort(function(a,b){return b.length - a.length});
    return array[0];
}

var sumNumbers = function(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

var repeatElements = function(array) {
    var longueur = array.length;
    for (var i = 0; i < longueur; i++) {
        array.push(array[i]);
    }
    return array;
}

var stringToNumber = function(string) {
    string = string - "";
    return string;
}

var calculateAverage = function(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    var longueur = array.length;
    var result = total / longueur;
    return result;
}

var getElementsUntilGreaterThanFive = function(array) {
    return array.slice(0,6);
}

var convertArrayToObject = function(array) {
    var TabObjet = {};
 for (var i = 0; i < array.length; ++i){
     var carac = array.charAt(i);
     TabObjet[i] = carac;
 }
 return TabObjet;
}

var getAllLetters = function(array) {
    var i = 0;
    var tab = [];
    array = array.join("");
    array = array.split("").sort();
    for (var i = 0; i < array.length; i++) {
        if (array[i] != array[i+1]) {
        tab.push(array[i]);
        }
    }
    return tab;

}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    for (var i = 0; i < string.length; i++) {
        var character = string.charAt(i);
        if (character === character.toUpperCase() && character != " ") {
            string = string.replace(character, "");
        }
    }
    return string;
}

var roundUp = function(number) {
    var result = Math.ceil(number);
    return result;
}

var formatDateNicely = function(date) {
    var result = new Date(date);
}

var getDomainName = function(string) {
    var indexArobase = string.search(/@/);
    var indexPoint = string.search(/.com$/ || /.fr/);
    var result = string.substring(indexArobase + 1, indexPoint);
    return result;
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
        for (var i = 0; string.length; i++) {
            if (string.charAt(i).match(/[a-z0-9A-Z]/)) {
                return false;
        }
        else {
            return true;
        }
        }
}

var squareRoot = function(number) {
    var result = Math.sqrt(number);
    return result;
}

var factorial = function(number) {
    var fact = 1;
 var result = 1;
 while (fact < number+1) {
   result = result * fact;
   fact = fact + 1;    
 } return result;
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    result = Math.round((number-32)/1.8000);
   return result;
}

var letterPosition = function(array) {
    return 'Write your method here';
}
