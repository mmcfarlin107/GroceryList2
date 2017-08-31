$(document).ready(function(){
$('#add').click(function(){
  console.log("clicked");
  var groceryInput = $('#groceryInput').val();
  var amountInput = $('#amountInput').val();
  var priceInput = $('#priceInput').val();
  var itemTotal = amountInput * priceInput;
  $('#groceryItems').append("<tr><td>" + groceryInput +
    "</td> <td>" + amountInput +
    "</td><td>" + priceInput +
    "</td><td>" + itemTotal + "</td></tr>");
});








//closing out document.ready
});
