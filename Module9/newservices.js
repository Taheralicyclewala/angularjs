angular.module("customServices")
.provider("newlogService", function(){
	var counter = true;
	var debug = true;
	return {
		messageCountEnabled: function(setting){
			if (angular.isDefined(setting)){
				counter = setting;
				return this;
			} else {
				return counter;
			}
		},
		debugEnabled: function(setting) {
			if (angular.isDefined(setting)){
				debug = setting;
				return this;
			} else {
				return this;
			}
		},
		$get: function(){
			return {
				messageCount:  0,
				log: function(msg){
					if(debug){
						console.log("(LOG + " + this.messageCount++ +") " + msg);
					}
					if(counter){
						console.log("(COUNT + " + this.messageCount++ +") " + msg);
					}
				}
     			    
			};
		}
	}
});