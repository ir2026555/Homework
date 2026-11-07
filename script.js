function startEasyQuiz() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0;

    function indexEasyQuiz() {
        for (let i = 0; i < quiz.length; i++) {
            const question = quiz[i];
            
            const optionsString = question.options.join('\n');
            
            const userAnswer = prompt(
                `${question.question}\n${optionsString}\n\nВыберите номер правильного ответа:`
            );
            
           if (userAnswer === null) {
                alert('Викторина отменена.');
                return;
            }
            
            if (parseInt(userAnswer) === question.correctAnswer) {
                score++;
            }
        }
        
        alert(`Викторина завершена!\nВы правильно ответили на ${score} из ${quiz.length} вопросов.`);
    }

    indexEasyQuiz();
    console.log('Игра завершена!');
}