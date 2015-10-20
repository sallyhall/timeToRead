
$( document ).ready(function() {
  var minutes = $(document).getTimeToRead();
  $("#timeToRead").text("Time to Read: " + minutes + " minutes.");
});
