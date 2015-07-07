/**
 * Created by Taimoor on 7/7/2015.
 */

var app = angular.module('app', ['ngNewRouter' ,'app.',  'app.view', 'app.edit' ,'ngMaterial']);
app.controller('AppController', ['$router', '$location', AppController]);

AppController.$routeConfig = [

    {
        path:'/view',
        component:'view'
    },
    {
        path:'/',
        component:'add'
    },
    {
        path:'/edit/:id',
        component:'edit'
    }

];


function AppController($router,$location){


    this.goToView = function(){
        $location.path('/view');
    };


    this.goToAdd = function(){
        $location.path('/');
    };

    /*    this.goToEdit = function(){
     $location.path('/view/edit({ida:5})');
     };*/
}