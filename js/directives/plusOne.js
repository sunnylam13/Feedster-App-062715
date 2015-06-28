app.directive('plusOne', function() {
  return {
    restrict: 'E',
    scope: {
      
    },
    templateUrl: 'js/directives/plusOne.html',
    link: function (scope, element, attrs) {
    	// the like() function is setup within the link option of the directive
    	scope.like = function() {
  	    element.toggleClass('btn-like');
  	  }
    }
  };
});
