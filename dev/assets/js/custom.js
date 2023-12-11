

// function checkAnswer() {
//     // Получаем все радиокнопки с именем "question"
//     var radioButtons = document.getElementsByName('question');

//     // Переменная для хранения выбранного ответа
//     var selectedAnswer = null;

//     // Перебираем радиокнопки
//     for (var i = 0; i < radioButtons.length; i++) {
//         if (radioButtons[i].checked) {
//             // Если кнопка выбрана, сохраняем ее значение
//             selectedAnswer = radioButtons[i].value;
//             break;
//         }
//     }

//     // Проверяем правильность ответа и выводим сообщение
//     if (selectedAnswer === 'option2') {
//         alert('Правильно!');
//     } else {
//         alert('Yt ghfdbkmyj');
//     }
// }


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

    // setTimeout(function() {
    //     window.location.href = '2-question.html'; // Замените на фактический путь
    // }, 3000);
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

// function checkAnswerTwo() {
//     var radioButtons = document.getElementsByName('question');
//     var selectedAnswerOne = null;

//     for (var i = 0; i < radioButtons.length; i++) {
//         if (radioButtons[i].checked) {
//             selectedAnswerOne = radioButtons[i].value;
//             break;
//         }
//     }

//     if (selectedAnswerOne === 'option2.1') {
//         // Ответ верный
//         showCorrectAlert();
//     } else {
//         // Ответ неверный
//         showIncorrectAlert();
//     }

//     console.log(selectedAnswerOne);       // нужно

    // setTimeout(function() {
    //     window.location.href = '2-question.html'; // Замените на фактический путь
    // }, 3000);
// }
