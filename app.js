/**
 * Created by Taimoor on 7/7/2015.
 */

var app = angular.module('app', ['ngNewRouter' ,'app.addquestion',  'app.columnsection' ,'ngMaterial']);
app.controller('AppController', ['$router', '$location', AppController]);

AppController.$routeConfig = [

    {
        path:'/',
        component:'addquestion'
    },
    {
        path:'/columnsection',
        component:'columnsection'
    }

];


function AppController($router,$location){


    this.goTocolumnsection = function(){
        $location.path('/columnsection');
    };


    this.goTogoToAddQuestion = function(){
        $location.path('/');
    };

    /*    this.goToEdit = function(){
     $location.path('/view/edit({ida:5})');
     };*/
}