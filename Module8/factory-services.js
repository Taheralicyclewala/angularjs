//Service Creation By factory
angular.module("customServices",[])
.factory("logService", function(){
	var messageCount = 0;
	return {
		log:function(msg){
			console.log("LOG + " + messageCount++ +" -> " + msg);
		},
		play:function(msg){
			console.log("PLAY + " + messageCount++ +" -> " + msg);
		}
	};
});