angular.module("customDirectives",["customServices"])
.directive("triButton", function(){
	return {
		//Try few examples of this
		//@ -> Attribute String binding
		//& -> Callback method binding
		scope: {counter: "=counternew", info:"=infonew"},
		link: function(scope,element,attrs,logService){
			element.on("click", function(event){
				console.log("Info " + scope.info);
				logService.log(scope.info);
				console.log("Button click " + event.target.innerText);
				//scope.counter++;
				scope.$apply(function(){
					scope.counter++;
					console.log("counter " + scope.counter);
				})
			})
		}

	}

});