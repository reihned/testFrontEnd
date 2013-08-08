function remix(reForm) {
    var text = '';
	var textOrig = reForm.elements['userText'];
	var output = ''
    
    text = textOrig.value;
    
	// alert(text);
	
	var cache = text.split(" ")
	var cache2 = new Array();
	
	var n = 0;
	var m = 0;
	var l = cache.length;
	
	for( var i = 0; i < l; i++ ){
	
		m = getRandomInt(4,8);
		
		cache2[i] = '';
		
		for( var j = 0; j < m; j++ ){
			n = getRandomInt(0,(l-1));
			cache2[i] += cache[n] + " "; 
		}//inner nested for adding like breaks
		
		output += "<li>" + cache2[i] + "</li>";
		
	}//for that processes random text
	
	$("#content").html(output);
    
}//function remix

// Returns a random number between min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}//function random