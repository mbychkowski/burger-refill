$(function() {

  // CREATE
  $('#order-burger').on('click', function(event) {

    event.preventDefault();

    var newBurger = {
      burger_name: $('#burger-input').val().trim(),
      devoured: false
    };

    $.ajax('/api/burger', {
      type: 'POST',
      data: newBurger
    }).then(
      function() {
        console.log('order new burger');

        location.reload();
      }
    );
  });

  // UPDATE
  $('.eat-burger').on('click', function(event) {

    event.preventDefault();

    var burgerId = $(this).data('burger-id');

    $.ajax('/api/burger/' + burgerId, {
      type: 'PUT'
    }).then(
      function() {
        console.log('updated burger');

        location.reload();
      }
    );
  });

  // DELETE
  $('.remove-burger').on('click', function(event) {

    event.preventDefault();

    var burgerId = $(this).data('burger-id');

    $.ajax('/api/burger/' + burgerId, {
      type: 'DELETE'
    }).then(
      function() {
        console.log('updated burger');

        location.reload();
      }
    );
  });
});
