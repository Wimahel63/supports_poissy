
var tempc=Number(prompt("Temperature en Celsius"));
/*[°F] = [°C] x 9/5 + 32.*/
var tempf=Number(prompt("Temperature en Fahreneit"));

alert(tempc + "C equivaut à" + ((tempc*1.8)+32) + "F");
alert(tempf + "F equivaut à" + ((tempf-32)/1.8) + "C");