angular.module("customServices",[])
.provider("coolLogService", function(){
	var counter = true;
	var debug = true;
	return {
		message: function(setting){
			if (angular.isDefined(setting)){
				counter = setting;
				return this;
			} else {
				return counter;
			}
		},
		$get : function(){
           return {
				messageCount:  0,
				coollog: function(msg){
					if(debug){
						console.log("(coolLOG + " + this.messageCount++ +") " + msg);
					}
					if(counter){
						console.log("(coolCOUNT + " + this.messageCount++ +") " + msg);
					}
				}
     			    
			};
		}
	}
})
.provider("logService", function(){
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