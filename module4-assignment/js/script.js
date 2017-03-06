// JavaScript Document

(function () {

var names = ["Yasier", "Jenny", "Johney", "Jason", "Paul", "Farahan", "Larry", "Pavith", "Latha", "Jagga" , "Jagadesh"];

for(var i=0;i < names.length;i++){
if(names[i].charAt(0) == "J" || names[i].charAt(0) == "j"){
	console.log("Hello "+names[i]);
}else{
	console.log("Good Bye "+names[i]);
}
}

})();