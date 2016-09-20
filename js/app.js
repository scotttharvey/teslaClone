angular.module('tesla', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/home');

var baseUrl = /local|127/.test(window.location.hostname) ? '' : '/teslaClone';

$stateProvider

.state('home', {
  url: "/home",
  templateUrl: baseUrl + "/views/home-tmpl.html",
  controller: "homeCtrl"
})
.state('models', {
  url: "/models",
  templateUrl: baseUrl + "/views/modelS-tmpl.html",
  controller: "modelsCtrl"
})
.state('modelx', {
  url: "/modelx",
  templateUrl: baseUrl + "/views/modelX-tmpl.html",
  controller: "modelxCtrl"
})
.state('model3', {
  url: "/model3",
  templateUrl: baseUrl + "/views/model3-tmpl.html",
  controller: "model3Ctrl"
})


})
