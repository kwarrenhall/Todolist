
function toDo(userInput) {
var list = [];
list.push(userInput);
return list;
};

// var generateOutput = function(input){
//   $('.results ul').append('<li>' + input + '</li>');
//   $('#ToDoItem').val('');
// };

$("form").submit(function(event){
event.preventDefault();
var userInput = $('#ToDoItem').val();
var result = toDo(userInput);
// generateOutput(result);

$('.results ul').append('<li>' + result + '</li>');
$('#ToDoItem').val('');


});
