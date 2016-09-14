angular.module('tesla', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/home');

$stateProvider

.state('home', {
  url: "/home",
  templateUrl: "/views/home-tmpl.html",
  controller: "homeCtrl"
})


})
