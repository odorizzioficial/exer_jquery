$(document).ready(function () {
  $('#list-form').submit(function (event) {
    event.preventDefault();
    var taskName = $('#list-tarefa').val();
    if (taskName !== '') {
      var listItem = $('<li>' + taskName + '</li>');
      listItem.click(function () {
        $(this).toggleClass('completed');
      });
      $('#list').append(listItem);
      $('#list-tarefa').val('');
    }
  });
});