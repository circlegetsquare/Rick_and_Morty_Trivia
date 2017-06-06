
      /* VARIABLES */
      var questions = [
        {
          question: "How many developers to screw in light bulb?",
          answer: ["0", "1", "3", "4"],
          correctAnswer: "0"
        },
        {
          question: "What is the best band of all time?",
          answer: ["Beatles", "New Order", "ABBA", "Carley Rae Jepson"],
          correctAnswer: "ABBA"        
        },
      ];

      /* EVENTS */
        /* initizlize */
        /* button click */
        $('#start').on('click', function() {
          startGame();
        })


      /* FUNCTIONS */
      function startGame() {
        var j = 0;
        var questionString = '';
        for(var i=0; i < questions.length; i++) {
          j++;

          var answerString = '';
          
          questionString = '<div>' + j + '. ' + questions[i].question + '</div>';

          for(var a=0; a < questions[i].answer.length; a++) {
            answerString += '<input class="answer" type="radio">' + questions[i].answer[a] + '</input>';
          }

          $('#questions').append('<div class="question">' + questionString + answerString + '</div>');
        }
      }