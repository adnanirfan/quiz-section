/**
 * Created by Taimoor on 7/7/2015.
 */
var app = angular.module("app", ["ngMaterial", "ngNewRouter"]);


app.controller("quizController", function($router){

    $router.config([
        {
            path : "/",
            component : "home"
        },
        {
            path : "/home",
            component : "home"
        }

    ]);

});
