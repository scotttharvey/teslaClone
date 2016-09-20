angular.module("tesla").directive("navBar", function(){
  return {
    templateUrl: '../views/navBar-tmpl.html',
    restric: "EA",
    scope: {

    },
    controller: function($scope){

    },
    link: function(scope, element, attrs){

    }

  };
});


var event = new Event('lastJsLoaded');
document.dispatchEvent(event);
