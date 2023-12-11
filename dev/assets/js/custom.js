

// Вопрос 1


function checkAnswerOne() {
    var radioButtons = document.getElementsByName('question');
    var selectedAnswerOne = null;

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedAnswerOne = radioButtons[i].value;
            break;
        }
    }

    if (selectedAnswerOne === 'option1.2') {
        // Ответ верный
        showCorrectAlert();
    } else {
        // Ответ неверный
        showIncorrectAlert();
    }

    console.log(selectedAnswerOne);       // нужно

    setTimeout(function() {
        window.location.href = 'form-2.html'; // Замените на фактический путь
    }, 3000);
}


function showCorrectAlert() {
    var correctAlert = document.getElementById('correctAlert');
    correctAlert.style.display = 'block';
}

function showIncorrectAlert() {
    var incorrectAlert = document.getElementById('incorrectAlert');
    incorrectAlert.style.display = 'block';
}

// Вопрос 2

function checkAnswerTwo() {
    var radioButtons = document.getElementsByName('question');
    var selectedAnswerOne = null;

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedAnswerOne = radioButtons[i].value;
            break;
        }
    }

    if (selectedAnswerOne === 'option2.1') {
        // Ответ верный
        showCorrectAlert();
    } else {
        // Ответ неверный
        showIncorrectAlert();
    }

    console.log(selectedAnswerOne);       // нужно

    setTimeout(function() {
        window.location.href = 'form-3.html'; // Замените на фактический путь
    }, 3000);
}

// Вопрос 3

function checkAnswerThree() {
    var radioButtons = document.getElementsByName('question');
    var selectedAnswerOne = null;

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedAnswerOne = radioButtons[i].value;
            break;
        }
    }

    if (selectedAnswerOne === 'option3.3') {
        // Ответ верный
        showCorrectAlert();
    } else {
        // Ответ неверный
        showIncorrectAlert();
    }

    console.log(selectedAnswerOne);       // нужно

    setTimeout(function() {
        window.location.href = 'form-4.html'; // Замените на фактический путь
    }, 3000);
}

// Вопрос 4

function checkAnswerFour() {
    var radioButtons = document.getElementsByName('question');
    var selectedAnswerOne = null;

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedAnswerOne = radioButtons[i].value;
            break;
        }
    }

    if (selectedAnswerOne === 'option4.4') {
        // Ответ верный
        showCorrectAlert();
    } else {
        // Ответ неверный
        showIncorrectAlert();
    }

    console.log(selectedAnswerOne);       // нужно

    setTimeout(function() {
        window.location.href = 'form-5.html'; // Замените на фактический путь
    }, 3000);
}

// Вопрос 5

function checkAnswerFive() {
    var radioButtons = document.getElementsByName('question');
    var selectedAnswerOne = null;

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedAnswerOne = radioButtons[i].value;
            break;
        }
    }

    if (selectedAnswerOne === 'option5.4') {
        // Ответ верный
        showCorrectAlert();
    } else {
        // Ответ неверный
        showIncorrectAlert();
    }

    console.log(selectedAnswerOne);       // нужно

    setTimeout(function() {
        window.location.href = 'form-6.html'; // Замените на фактический путь
    }, 3000);
}