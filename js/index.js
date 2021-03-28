var input = prompt("Lütfen bir metin giriniz");
var charsArray = input.split("");

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

function checkSpecialChars(array) {
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
    return document.write("<div class='alert show'>"+msg+"</div>")
}

if(checkHasNumber(charsArray)) {
    showAlert("Lütfen içerisinde numara olmayan bir değer girin!");
} else if(checkSpecialChars(charsArray)) {
    showAlert("Lütfen girdiğiniz kelime içerisinde özel karakter kullanmayınız!")
} else if(checkMinMax(1, 9, input)) {
    showAlert("Lütfen minimum 1 maximum 9 karaktere sahip değer girin!")
} else {
    document.write(`<div class="title"><h3>${input}</h3></div>`);
    document.write('<div class="title2"><h3>Oluşturulan kelimeler</h3></div>')
    for (var i = 0; i < charsArray.length; i++) {
        var randomizedString = "";
        for (var sayac = 0; sayac <= i; sayac++) {
            randomizedString += input[Math.floor(Math.random() * input.length)];
        }
        var numberOfChar = i + 1;
        document.write(`<li class="list"><span class="indicator">${numberOfChar} karakterli</span><span class="list-text">${randomizedString}</span></li>`)
    }
}
