
$.fn.getTimeToRead = function (wpm) {
  if (typeof wpm != "number"){
    wpm=230;
  }
  var paragraphTextArray = [].slice.call(this.find('p'));
  var totalText = "";
  paragraphTextArray.forEach(function(paragraph) {
    totalText += paragraph.textContent;
  });
  var wordCount = totalText.split(" ").length;
  var totalTime = Math.round(wordCount/wpm);
  return totalTime;
}
