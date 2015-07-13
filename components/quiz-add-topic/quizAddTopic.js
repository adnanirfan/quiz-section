/**
 * Created by Adnan Irfan on 09-Jul-15.
 */
(function () {
    'use strict';

    angular
        .module('app.quizAddTopic')
        .controller('QuizAddTopicController', QuizAddTopicController);

    QuizAddTopicController.$inject = ["$routeParams","$location","userService"];

    function QuizAddTopicController($routeParams,$location,userService) {
        /*Private Variables*/
        var chapterName=$routeParams.id;
        alert(chapterName);
        console.log(chapterName);

        var vm = this;

        var ref =  new Firebase('https://pspractice.firebaseio.com/Topics/');
        vm.addTopics=function(){
            console.log(vm.topic.title);
            ref.child(chapterName).child(vm.topic.Title).set({
                Title:vm.topic.Title,
                Description:vm.topic.Description
            });
        };
        vm.prev=function(){
            $location.path('/user/'+userService.getCurrentUser().userID+'/quiz')
        };

      /*  var $scope = this;
        $scope.addTopic = addTopic;


        //All Function
        function addTopic(){
            console.log('Add Book')
        }*/
    }

})();