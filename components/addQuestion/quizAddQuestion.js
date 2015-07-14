
(function () {
    'use strict';

    angular
        .module('app.quizAddQuestion')
        .controller('QuizAddQuestionController', QuizAddQuestionController);
    QuizAddQuestionController.$inject = ["$mdDialog","$routeParams"];
    function QuizAddQuestionController($mdDialog,$routeParams){
        var myFirebaseRef = new Firebase("https://pspractice.firebaseio.com/Questions/");
        var idCounter = 2;
        this.showRadioOptions = false;
        this.showCheckOptions = false;
        this.showAddButton = false;
        this.myAnswer = {};
        this.myType = '';
        this.showCheckText = false;
        var that = this;
        this.typeChanged = function(){
            that.radioValue = '';
            that.question.QuestionOptions = [
                {optionText : '', id: 1, indexNo: 0},
                {optionText : '', id: 2, indexNo: 1}
            ]
        };
        //Answer Types.
        this.types = [
            { name: 'Radio Button'},
            { name: 'CheckBox'}
        ];
        this.question = {
            Title           : '',
            Description     : '',
            Type            : '',
            Answer          : [],
            QuestionOptions : [
                {optionText : '', id: 1},
                {optionText : '', id: 2}
            ]
        };
        //Setting different inputs.
        this.setBoxValue = function(){
            this.showAddButton = true;
            if (that.myType.name === 'Radio Button'){
                that.showRadioOptions = true;
                that.showCheckOptions = false;
                that.showCheckText = false;
            }
            else if(that.myType.name === 'CheckBox') {
                that.question.Answer = [];
                that.showCheckOptions = true;
                that.showRadioOptions = false;
                that.showCheckText = true;

            }
        };
        //Push new input fields.
        this.addOption = function () {
            idCounter++;
            that.question.QuestionOptions.push({optionText:'', id: idCounter});
        };

        //Sets Answer if Type CheckBox is selected.
        that.setCheckBoxValue = function(questionId){
            if (that.question.QuestionOptions[questionId].id == true){
                that.question.Answer.push(that.question.QuestionOptions[questionId].optionText);
            }
            else if (that.question.QuestionOptions[questionId].id == false){
                var arr = [], name = '';
                arr = that.question.Answer;
                name = that.question.QuestionOptions[questionId].optionText;
                for(var i = 0; i < arr.length; i++){
                    if(arr[i] === name){
                        arr.splice(i, 1);
                    }
                }
                that.question.Answer = arr;
            };
        };
        //Delete Option
        this.deleteOption = function(optionIndex){
            if (optionIndex > -1) {
                that.question.QuestionOptions.splice(optionIndex, 1);
            }
        };
        //Save Button
        this.showAnswer = function(){
            if(that.myType.name === 'Radio Button'){
                that.question.Answer = that.myAnswer;
            }
            for(var k = 0; k < that.question.QuestionOptions.length; k++){
                delete that.question.QuestionOptions[k].$$hashKey;
                delete that.question.QuestionOptions[k].$$mdSelectId;
                delete that.question.QuestionOptions[k].indexNo;
                delete that.question.QuestionOptions[k].id;
            }
            that.question.Type = that.myType.name;
            console.log(that.question);
            myFirebaseRef.child($routeParams.id).child(that.question.Title).set(that.question);

        };
        //Add more button
        //Saves data to firebase and clears input fields.
        this.addQuestion = function(){
            /*that.question.QuestionOptions.*/
            this.showRadioOptions = false;
            this.showCheckOptions = false;
            this.showAddButton = false;
            for(var k = 0; k < that.question.QuestionOptions.length; k++){
                delete that.question.QuestionOptions[k].$$hashKey;
                delete that.question.QuestionOptions[k].$$mdSelectId;
                delete that.question.QuestionOptions[k].id;
            }
            myFirebaseRef.child($routeParams.id).child(that.question.Title).set(that.question);
            that.question = {
                Title           : '',
                Description     : '',
                Type            : '',
                Answer          : [],
                QuestionOptions : [
                    {optionText : '', id: 1},
                    {optionText : '', id: 2}
                ]
            };

        };
        //Shows a alert box.
        this.showAdvanced = function(ev) {
            that.question.Type = that.myType.name;
            if(that.myType.name === 'Radio Button'){
                that.question.Answer = that.myAnswer;
            }
            else if(that.myType.name === 'CheckBox'){
                /*that.question.answer = [];*/
            }
            $mdDialog.show({
                controller: DialogController,
                templateUrl: './components/quiz-add-question/dialog.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                locals: { questionData : that.question }
            })
                .then(function(answer) {

                }, function() {

                });
        };

    }
})();
function DialogController($scope, $mdDialog, questionData) {
    $scope.questionData = questionData;
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
}
