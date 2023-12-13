function firstChar(text) {
  // your code here
	return text.length==0?'':text.charAt(0);
}

// Do not change the code below

const text = 
prompt("Enter text:");
alert(firstChar(text));
