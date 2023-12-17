

// Вопрос 1

function question1_1() {

    function checkAnswer() {
        var radioButtons = document.getElementsByName('question');
        let selectedAnswer = null;
    
        for (var i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                selectedAnswer = radioButtons[i].value;
                break;
            }
        }
    
        if (selectedAnswer === 'option1_2') {
            // Ответ верный
            showCorrectAlert();
        } else {
            // Ответ неверный
            showIncorrectAlert();
        }
    }
}

function question1_2() {
    var answerValuesOne = {
        'option1_1': 0,
        'option1_2': 1, // Это правильный ответ, поэтому значение 1
        'option1_3': 0
    };
    
    let selectedAnswer = null;
    var answerSubmitted = false;
    
    function selectAnswer(value) {
        if (!answerSubmitted) {
            selectedAnswer = value;
        }
    }
    
    function submitAnswer() {
        if (!answerSubmitted && selectedAnswer !== null) {
            // Ответ подтвержден
            console.log('Значение ответа: ' + answerValuesOne[selectedAnswer]);
    
            // Устанавливаем флаг подтверждения ответа
            answerSubmitted = true;
    
            // Деактивируем радиокнопки, чтобы предотвратить дальнейший выбор
            var radioButtons = document.getElementsByName('question');
            for (var i = 0; i < radioButtons.length; i++) {
                radioButtons[i].disabled = true;
            }
        }
    
        setTimeout(function() {
            window.location.href = 'form-2.html'; // Замените на фактический путь
        }, 500);
    }
}








// кастомные аллерты

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

    if (selectedAnswerOne === 'option2_1') {
        // Ответ верный
        showCorrectAlert();
    } else {
        // Ответ неверный
        showIncorrectAlert();
    }
}

var answerValuesTwo = {
    'option2_1': 1,
    'option2_2': 0, 
    'option2_3': 0,
    'option2_4': 0
};

var selectedAnswer = null;
var answerSubmitted = false;

function selectAnswer(value) {
    if (!answerSubmitted) {
        selectedAnswer = value;
    }
}

function submitAnswer() {
    if (!answerSubmitted && selectedAnswer !== null) {
        // Ответ подтвержден
        console.log('Значение ответа: ' + answerValuesTwo[selectedAnswer]);

        // Устанавливаем флаг подтверждения ответа
        answerSubmitted = true;

        // Деактивируем радиокнопки, чтобы предотвратить дальнейший выбор
        var radioButtons = document.getElementsByName('question');
        for (var i = 0; i < radioButtons.length; i++) {
            radioButtons[i].disabled = true;
        }
    }

    setTimeout(function() {
        window.location.href = 'form-3.html'; // Замените на фактический путь
    }, 500);
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