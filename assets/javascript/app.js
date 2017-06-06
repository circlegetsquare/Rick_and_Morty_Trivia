
      /* QUESTIONS */

    var questions = [

        {
            question: "First question goes here?",
            answer: ["Zero", "One", "Two", "Three"],
            correctAnswer: 0,
            correctHTML: '<div><p>Content for correct answer 1</p></div>',
            missedHTML: '<div><p>Content for incorrect answer 1</p></div>',
        },
        {
            question: "Second question goes here?",
            answer: ["Four", "Five", "Six", "Seven", "Eight"],
            correctAnswer: 1,
            correctHTML: '<div><p>Content for correct answer 2</p></div>',
            missedHTML: '<div><p>Content for incorrect answer 2</p></div>',
        },
                {
            question: "Third question goes here?",
            answer: ["Nine", "Ten", "Eleven", "Twelve"],
            correctAnswer: 2,
            correctHTML: '<div><p>Content for correct answer 3</p></div>',
            missedHTML: '<div><p>Content for incorrect answer 3</p></div>',
        },
      ];

      /* INITIALIZE */

        $('#start').on('click', function() {
          game.resetGame();
        })


      /* GAME OBJECT */

    var game = {

        questionNum: 0,
        correctNum: 0,
        missedNum: 0,
        noAnswerNum: 0, 

        resetGame: function() {
            this.questionNum = 0,
            this.correctNum = 0;
            this.wrongNum = 0;
            this.noAnswerNum = 0;
            $('#score-box').html('<div class="score">Correct: <span id="correct-score">0</span></div><div class="score">Missed: <span id="missed-score">0</span></div><div class="score">No Answer: <span id="no-answer-score">0</span></div>')
            this.displayQuestion();

        },

        displayQuestion: function() {
            var answerString = '';
            var questionString = '';
            var questionNumDisplay = game.questionNum + 1;
            var answerNumDisplay = 1;
            console.log(questions[game.questionNum].question);
            questionString = '<div class ="question">' + questionNumDisplay + '. ' + questions[game.questionNum].question + '</div>';
            for(var i=0; i < questions[game.questionNum].answer.length; i++) {
                answerString += '<button class="answer" value="' + i + '">' + answerNumDisplay + '. ' + questions[game.questionNum].answer[i] + '</button>';
                answerNumDisplay++;
                }
            $('#question-box').html(questionString + answerString);
            game.onClickAnswer();
        },

        onClickAnswer: function() {
            $(".answer").on("click", function() {
                var answerVal = parseInt($(this).val());
                if (answerVal === questions[game.questionNum].correctAnswer) {
                    alert("right!");
                    game.correctAnswer();
                }
                else {
                    alert("wrong!");
                    game.missedAnswer();
                }
            });
            
        },

        onTimedOut: function() {
            noAnswer();
        },

        correctAnswer: function() {
            this.correctNum++;
            $('#correct-score').html(this.correctNum);
            $('#question-box').html('<div><p>Correct!</p></div>' + questions[this.questionNum].correctHTML);
            this.questionNum++;
            setTimeout(this.displayQuestion, 2000);
        },

        missedAnswer: function() {
            this.missedNum++;
            $('#missed-score').html(this.missedNum);
            $('#question-box').html('<div><p>Nope!</p></div>' + questions[this.questionNum].missedHTML);
            this.questionNum++;
            setTimeout(this.displayQuestion, 2000);
        },

        noAnswer: function() {
            this.noAnswerNum++;
            $('#no-answer-score').html(this.noAnswerNum);
            $('#question-box').html('<div><p>Too Late...</p></div>' + questions[this.questionNum].missedHTML);
            this.questionNum++;
            setTimeout(this.displayQuestion, 2000);
        }



    };
