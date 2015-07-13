/**
 * Created by Adnan Irfan on 09-Jul-15.
 */
(function () {
    'use strict';
    angular
        .module('app.quizAddChapter', ['core'])
        .factory('quizAddChapterService', ['$q', 'authService', "$location", "messageService", 'userService', '$firebaseObject', 'firebaseService', 'checkinService',
            function ($q, authService, $location, messageService, userService, $firebaseObject, firebaseService, checkinService) {


            }
        ])

})();