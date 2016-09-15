angular.module('tesla', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/home');

$stateProvider

.state('home', {
  url: "/home",
  templateUrl: "/views/home-tmpl.html",
  controller: "homeCtrl"
})
.state('models', {
  url: "/models",
  templateUrl: "/views/modelS-tmpl.html",
  controller: "modelsCtrl"
})
.state('modelx', {
  url: "/modelx",
  templateUrl: "/views/modelX-tmpl.html",
  controller: "modelxCtrl"
})
.state('model3', {
  url: "/model3",
  templateUrl: "/views/model3-tmpl.html",
  controller: "model3Ctrl"
})


})
