$(document).ready(function(){

//setting total variable for the total amount the user sees
var total = 0;

// When the Add item button is clicked, this function creates a new table row with the data the user input and adds the new amount into the price total
$('#add').click(function(){
  console.log("clicked");
  var groceryInput = $('#groceryInput').val();
  var amountInput = $('#amountInput').val();
  var priceInput = $('#priceInput').val();
  var itemTotal = amountInput * priceInput;

  $('#groceryItems').append("<tr><td>" + groceryInput +
    "</td> <td>" + amountInput +
    "</td><td> $" + priceInput +
    "</td><td class='subAmt'> $" + itemTotal.toFixed(2) +
    "</td> <td> <button class='deleteThis'> Delete Item </button> </td> </tr>");

    total += itemTotal;

    $('#totalAmount').text("Total: $" + total.toFixed(2))

$('#groceryInput').val('');
$('#amountInput').val('');
$('#priceInput').val('');
});

//Removes Table Row on when delete button is clicked
$("#listTable").on('click', '.deleteThis', function () {
  var itemTotal = $(this).closest('tr').find(".subAmt").text();
  var number = Number(itemTotal.replace(/[^0-9\.-]+/g,""));
  console.log(number);
  total -= number;
$('#totalAmount').text("Total: $" + total.toFixed(2))
    $(this).closest('tr').remove();

});








//closing out document.ready
});
