angular.module("exampleApp")
  .filter("justAppend", function(){
    return function(value,tag){
      return value+tag+'hello';
    };
  })