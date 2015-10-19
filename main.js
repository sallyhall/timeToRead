var wordsPerMinute = 230;

$.fn.getTimeToRead = function () {
  var paragraphTextArray = [].slice.call(this.find('p'));
  var totalText = "";
  paragraphTextArray.forEach(function(paragraph) {
    totalText += paragraph.textContent;
  });
  var wordCount = totalText.split(" ").length;
  var totalTime = Math.round(wordCount/wordsPerMinute);
  return totalTime;
}

$( document ).ready(function() {
  var minutes = $(document).getTimeToRead()
  $("#wordCount").text("Time to Read: " + minutes + " minutes.");
});
