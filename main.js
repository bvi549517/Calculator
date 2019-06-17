resetCalculator();
var activeInput = 'first_number';

// $ = document.querySelector
// ('.number') means select all elements with the class ".number"
// .click means on clicking the element
$('.number').click(function(){
	var numberEntered = $(this).html();
	var newValue = $('#'+activeInput).val()+numberEntered;
	$('#'+activeInput).val(newValue);
	// if ($("#first_number").val() == '') {
	// 	$("#first_number").val(numberEntered);
	// } else {
	// 	$("#second_number").val(numberEntered);
	// }
});

$('.clear').click(function(){
	resetCalculator();
});

$('#add').click(function(){
	addition();
});

$('#subtract').click(function(){
	subtraction();
});

$('#multiply').click(function(){
	multiplication();
});

$('#divide').click(function(){
	division();
});

function addition() {
	var firstNumber = $("#first_number").val();
	var secondNumber = $("#second_number").val();
	var thirdNumber = $("#third_number").val();
	var fourthNumber = $("#fourth_number").val();

	var output = Math.abs(firstNumber) + Math.abs(secondNumber)+Math.abs(thirdNumber) + Math.abs(fourthNumber);

	$("#output").text(output);
}

function subtraction() {
	var firstNumber = $("#first_number").val();
	var secondNumber = $("#second_number").val();
	var thirdNumber = $("#third_number").val();
	var fourthNumber = $("#fourth_number").val();

	var output = Math.abs(firstNumber) - Math.abs(secondNumber) - Math.abs(thirdNumber) - Math.abs(fourthNumber);

	$("#output").text(output);
}

function multiplication() {
	var firstNumber = $("#first_number").val();
	var secondNumber = $("#second_number").val();
	var thirdNumber = $("#third_number").val();
	var fourthNumber = $("#fourth_number").val();

	var output = Math.abs(firstNumber) * Math.abs(secondNumber) * Math.abs(thirdNumber) * Math.abs(fourthNumber);

	$("#output").text(output);
}

function division() {
	var firstNumber = $("#first_number").val();
	var secondNumber = $("#second_number").val();
	var thirdNumber = $("#third_number").val();
	var fourthNumber = $("#fourth_number").val();

	var output = Math.abs(firstNumber) / Math.abs(secondNumber) / Math.abs(thirdNumber) / Math.abs(fourthNumber);

	$("#output").text(output);
}

function resetCalculator() {
	$("#first_number").val('');
	$("#second_number").val('');
	$("#third_number").val('');
	$("#fourth_number").val('');
	$("#output").html('');
}

$('.next').click(function(){
	if(activeInput=='third_number') activeInput = 'fourth_number';
	if(activeInput=='second_number') activeInput = 'third_number';
	if(activeInput=='first_number') activeInput = 'second_number';
});
