(function () {
    'use strict';

    angular
        .module('app.quizAddChapter')
        .controller('QuizAddChapterController', QuizAddChapterController);

    QuizAddChapterController.$inject = ['$routeParams','$location','userService'];

    function QuizAddChapterController($routeParams,$location,userService) {
        /*Private Variables*/
        var vm = this;
        var ref =  new Firebase('https://pspractice.firebaseio.com/Chapters/');
        var bookName=$routeParams.id;
        alert(bookName);
        console.log(bookName);

        //console.log($routeParams.id);
        /*vm.hide=function(){
            $location.path('/quiz');

        }*/
        vm.prev=function(){
           // console.log("\n Routtttttttttttttttttttttttttttttttte")
            /*$location.path('/quiz');*/
            $location.path('/user/'+userService.getCurrentUser().userID+'/quiz')
        };


        vm.addChapters=function(){
           /* console.log(id);
            vm.Id= $routeParams.id;*/
            console.log(vm.Id);
            //console.log(vm.chapter.title);
            ref.child(bookName).child(vm.chapter.Title).set({
                Title:vm.chapter.Title,
                Description:vm.chapter.Description
            });
        };
        // vm.addBook = addBook;
        /*vm.chapters=[];
         vm.addChapters=function(){
         vm.chapters.push(vm.user.chapter);
         console.log(vm.user.chapter);
         };*/


        //All Function
        /*function addBook(){
         console.log('Add Book')
         }*/
    }

})();