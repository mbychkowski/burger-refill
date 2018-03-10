$(function() {

  $('#order-burger').on('click', function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $('#burger-input').val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax('/api/burger', {
      type: 'POST',
      data: newBurger
    }).then(
      function() {
        console.log('created new plan');

        location.reload();
      }
    );
  });

});
