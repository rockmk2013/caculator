$(function(){
	var currentText='';
	var currentTemp='';
	
	
	

$('#btn1').on('click',function(){
	//alert('hello jquery');
	currentText = currentText +'1';
	$('#message').text(currentText);
});
$('#btn2').on('click',function(){
	currentText = currentText +'2';
	$('#message').text(currentText);
});
$('#btn3').on('click',function(){
	currentText = currentText +'3';
	$('#message').text(currentText);
});
$('#btn4').on('click',function(){
	currentText = currentText +'4';
	$('#message').text(currentText);
});
$('#btn5').on('click',function(){
	currentText = currentText +'5';
	$('#message').text(currentText);
});
$('#btn6').on('click',function(){
	currentText = currentText +'6';
	$('#message').text(currentText);
});
$('#btn7').on('click',function(){
	currentText = currentText +'7';
	$('#message').text(currentText);
});
$('#btn8').on('click',function(){
	currentText = currentText +'8';
	$('#message').text(currentText);
});
$('#btn9').on('click',function(){
	currentText = currentText +'9';
	$('#message').text(currentText);
});
$('#btn0').on('click',function(){
	currentText = currentText +'0';
	$('#message').text(currentText);
});

$('#btnplus').on('click',function(){
	currentTemp = currentText;
	currentText='';
	currentOpe ='+';
	$('#message').text(currentText);
	$('#message2').text(currentOpe);
});


$('#btnminor').on('click',function(){
	currentTemp = currentText;
	currentText='';
	currentOpe ='-';
	$('#message').text(currentText);
	$('#message2').text(currentOpe);

});

$('#btnmul').on('click',function(){
	currentTemp = currentText;
	currentText='';
	currentOpe ='*';
	$('#message').text(currentText);
	$('#message2').text(currentOpe);

});

$('#btndiv').on('click',function(){
	currentTemp = currentText;
	currentText='';
	currentOpe ='/';
	$('#message').text(currentText);
	$('#message2').text(currentOpe);

});	

$('#btnclean').on('click',function(){
	currentText ='';
	currentOpe ='';
	$('#message').text(currentText);
	$('#message2').text(currentOpe);

});

$('#btnequal').on('click',function(){

switch(currentOpe){
	case'+':
      currentText=Number(currentTemp)+Number(currentText);
      $('#message').text(currentText);
      currentOpe ='';
      $('#message2').text(currentOpe);
       break;
    case'-':
      currentText=Number(currentTemp)-Number(currentText);
      $('#message').text(currentText);
      currentOpe ='';
      $('#message2').text(currentOpe);
       break;
    case'*':
      currentText=Number(currentTemp)*Number(currentText);
      $('#message').text(currentText);
      currentOpe ='';
      $('#message2').text(currentOpe);
       break;  
	case'/':
      currentText=Number(currentTemp)/Number(currentText);
      $('#message').text(currentText);
      currentOpe ='';
      $('#message2').text(currentOpe);
       break;
	

}
});

});