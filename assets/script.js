// var day = moment();
var today = $("#currentDay");
// today.text(moment().format("LLLL"));

function updateTime() {
  var dateTime = moment().format("llll");
  today.html("Today's date and time: " + dateTime);
}

updateTime();
setInterval(function () {
  updateTime();
}, 60000);
