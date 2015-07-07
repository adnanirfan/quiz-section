/**
 * Created by Taimoor on 7/7/2015.
 */

var app = angular.module('app', ['ngNewRouter' ,'app.addquestion', 'ngMaterial']);
app.controller('AppController', ['$router', '$location', AppController]);

AppController.$routeConfig = [

    {
        path:'/',
        component:'addquestion'
    }

];


function AppController($router,$location){


    this.goToAddQuestion = function(){
        $location.path('/');
    };

}