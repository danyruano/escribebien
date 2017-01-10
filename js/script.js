// Code goes here

function simpleController($scope) {
  $scope.questionPaper = {
    "id": "1",
    "subject": "AngularJS",
    "title": 'Exam#01',
    "questions": [{
      "id": "9",
      "options": [{
          "id": "22",
          "description": "yes",
          "orderId": "1"
        }, {
          "id": "23",
          "description": "now",
          "orderId": "2"
        },

        {
          "id": "24",
          "description": "don't know",
          "orderId": "3"
        }
      ],
      "description": "Question#01?",
      "orderId": "1"
    }, {
      "id": "10",
      "options": [{
        "id": "25",
        "description": "Home",
        "orderId": "1"
      }, {
        "id": "26",

        "description": "Work",
        "orderId": "2"
      }, {
        "id": "27",
        "description": "Undecided or Other",
        "orderId": "3"
      }],
      "description": "Where to go?",
      "orderId": "2"
    }, {
      "id": "20",
      "options": [{
        "id": "53",
        "description": "Wrong Direction",
        "orderId": "1"
      }, {
        "id": "54",
        "description": "Right Direction",
        "orderId": "2"
      }, {
        "id": "55",
        "description": "Don't know",
        "orderId": "3"
      }],
      "description": "Are you belive your in?",
      "orderId": "2"
    }],
    "updatedOn": "2014-07-12 18:20:52"
  };

  $scope.selected_ids = [];
  $scope.submitAnswers = function() {
    angular.forEach($scope.questionPaper.questions, function(question) {
      $scope.selected_ids.push(question.selected_id);
    });
  }
}