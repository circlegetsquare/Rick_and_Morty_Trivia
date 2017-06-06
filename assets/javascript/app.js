
      /* QUESTIONS */

    var questions = [

        {
            question: "First question goes here?",
            answer: ["Zero", "One", "Two", "Three"],
            correctAnswer: 0
        },
        {
            question: "Second question goes here?",
            answer: ["Four", "Five", "Six", "Seven", "Eight"],
            correctAnswer: 1
        },
                {
            question: "Third question goes here?",
            answer: ["Nine", "Ten", "Eleven", "Twelve"],
            correctAnswer: 2
        },
      ];

      /* INITIALIZE */

        $('#start').on('click', function() {
          game.resetGame();
        })


      /* GAME OBJECT */

    var game = {

        questionNum: 0,
        //questionString: '',
        //answerString: '',        

        resetGame: function() {
            this.questionNum = 0,
            this.displayQuestion();
        },

        displayQuestion: function() {

            var answerString = '';
            var questionString = '';
            var questionNumDisplay = this.questionNum + 1
            var answerNumDisplay = 1;
            //var i = 0;
            questionString = '<div class ="question">' + questionNumDisplay + '. ' + questions[this.questionNum].question + '</div>';
            for(var i=0; i < questions[this.questionNum].answer.length; i++) {
                answerString += '<button class="answer" value="' + i + '">' + answerNumDisplay + '. ' + questions[this.questionNum].answer[i] + '</button>';
                answerNumDisplay++;
                }
            $('#question-box').html(questionString + answerString);
            this.onClickAnswer();
        },

        onClickAnswer: function() {
            $(".answer").on("click", function() {
                var answerVal = parseInt($(this).val());
                if (answerVal === questions[game.questionNum].correctAnswer) {
                    alert("right!");
                    //run correctAnswer();
                }
                else {
                    alert("wrong!");
                    //run wrongAnswer();
                }
                
                game.questionNum++;
                game.displayQuestion();
            });
            
        },



    };
