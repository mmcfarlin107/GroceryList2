$(document).ready(function(){

  
$('#add').click(function(){
  console.log("clicked");
  var groceryInput = $('#groceryInput').val();
  var amountInput = $('#amountInput').val();
  var priceInput = $('#priceInput').val();
  var itemTotal = amountInput * priceInput;

  $('#groceryItems').append("<tr><td>" + groceryInput +
    "</td> <td>" + amountInput +
    "</td><td> $" + priceInput +
    "</td><td> $" + itemTotal.toFixed(2) +
    "</td> <td> <button type='button'> Delete Item </button> </td> </tr>");

$('#groceryInput').val('');
$('#amountInput').val('');
$('#priceInput').val('');


});








//closing out document.ready
});
