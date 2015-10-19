var wordsPerMinute = 230;

var getTimeToRead = function () {
  var paragraphTextArray = [].slice.call(document.querySelectorAll('p'));
  var totalText = "";
  paragraphTextArray.forEach(function(paragraph) {
    totalText += paragraph.textContent;
  });
  var wordCount = totalText.split(" ").length;
  var totalTime = Math.round(wordCount/wordsPerMinute);
  document.getElementById('wordCount').innerHTML = document.getElementById('wordCount').innerHTML + totalTime + " minutes.";
}

getTimeToRead();
