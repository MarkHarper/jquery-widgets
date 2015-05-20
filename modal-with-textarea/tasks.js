/*********************************************
Task input area
*********************************************/

$(function () {

  $('.open-notes').on('click', function () {
    $('.modal-container').addClass('showing');
  });

  $('.close-notes, .modal-container').on('click', function () {
    $('.modal-container').removeClass('showing');
  });

  $('.modal').click(function (e) {
    e.stopPropagation();
  });

});

$(function() {
  $('.task').on('keyup', function () {
    $(document).createElement('li');
  })
})
