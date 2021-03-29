var userValue = prompt("Lütfen bir metin giriniz");

function checkHasNumber(array) {
    var numbers = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
    ];
    for(var i = 0; i < array.length; i++) {
        for(var j = 0; j < numbers.length; j++) {
            if(numbers[j] === array[i]) {
                return true;
            }
        }
    }
}

function checkHasSpecialChar(array) {
    var specialChars = [
        '*',
        '#',
        '!',
        '+',
        '&',
        '{',
        '[',
        ']',
        '}',
        '|',
        '-',
        '+',
        '/',
        ',',
        '?',
        '^',
        ':',
        '<',
        '>',
        '.',
        '|',
        '(',
        ')',
        '@',
        '₺',
        '$',
        '€',
        '~'
    ];
    for(var i = 0; i < array.length; i++) {
        for(var j = 0; j < specialChars.length; j++) {
            if(specialChars[j] === array[i]) {
                return true;
            }
        }
    }
}

function checkMinMax(min, max, input) {
    if(input.length < min || input.length > max) {
        return true;
    }
}

function showAlert(msg) {
    return document.write('<div class="alert">'+msg+'</div>')
}

function makeRandomCombination(array) {
    for (var i = 0; i < array.length; i++) {
        var randomizedString = "";
        for (var k = 0; k <= i; k++) {
            randomizedString += array[Math.floor(Math.random() * array.length)];
        }
        var numberOfChar = k;
        document.write('<li class="list"><span class="indicator">'+ numberOfChar + ' karakterli</span><span class="list-text">'+randomizedString+'</span></li>')
    }
}

if(checkHasNumber(userValue) || checkHasSpecialChar(userValue)) {
    showAlert("Lütfen içerisinde numara veya özel karakter olmayan bir değer girin!");
} else if(checkMinMax(1, 9, userValue)) {
    showAlert("Lütfen minimum 1 maximum 9 karaktere sahip değer girin!")
} else {
    document.write('<div class="title"><h3>Girilen değer: '+userValue+'</h3></div>');
    document.write('<div class="title2"><h3>Oluşturulan kelimeler</h3></div>')
    makeRandomCombination(userValue);
}
