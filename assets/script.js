// var day = moment();
var today = $("#currentDay");
var currentHour = moment().hour();
var colorChange = document.querySelectorAll("tbody.tr.th");
// console.log(currentHour);
// today.text(moment().format("LLLL"));

colorChange.forEach((timeblock) => {
  const textarea = document.querySelector("<th>");
  const hour = parseInt(timeblock.getAttribute("data-hour"));
  if (currentHour > hour) {
    textarea.classList.add("past");
  } else if (currentHour === hour) {
    textarea.classList.add("present");
  } else if (currentHour < hour) {
    textarea.classList.add("future");
  }
  console.log(textarea);
  console.log(hour);
});

// hour =

// if (currentHour > hour) {
//   textarea.classList.add("past");
// } else if (currentHour === hour) {
//   textarea.classList.add("present");
// } else if (currentHour < hour) {
//   textarea.classList.add("future");
// }

function updateTime() {
  var dateTime = moment().format("llll");
  today.html("Today's date and time: " + dateTime);
}

updateTime();
setInterval(function () {
  updateTime();
}, 60000);

$("#8amBtn").on("click", function () {
  var textEntry = $("#8amText").val();
  localStorage.setItem("8:00am", textEntry);
});
$("#8amText").val(localStorage.getItem("8:00am"));

$("#9amBtn").on("click", function () {
  var textEntry = $("#9amText").val();
  localStorage.setItem("9:00am", textEntry);
});
$("#9amText").val(localStorage.getItem("9:00am"));

$("#10amBtn").on("click", function () {
  var textEntry = $("#10amText").val();
  localStorage.setItem("10:00am", textEntry);
});
$("#10amText").val(localStorage.getItem("10:00am"));

$("#11amBtn").on("click", function () {
  var textEntry = $("#11amText").val();
  localStorage.setItem("11:00am", textEntry);
});
$("#11amText").val(localStorage.getItem("11:00am"));

$("#12pmBtn").on("click", function () {
  var textEntry = $("#12pmText").val();
  localStorage.setItem("12:00pm", textEntry);
});
$("#12pmText").val(localStorage.getItem("12:00pm"));

$("#1pmBtn").on("click", function () {
  var textEntry = $("#1pmText").val();
  localStorage.setItem("1:00pm", textEntry);
});
$("#1pmText").val(localStorage.getItem("1:00pm"));

$("#2pmBtn").on("click", function () {
  var textEntry = $("#2pmText").val();
  localStorage.setItem("2:00pm", textEntry);
});
$("#2pmText").val(localStorage.getItem("2:00pm"));

$("#3pmBtn").on("click", function () {
  var textEntry = $("#3pmText").val();
  localStorage.setItem("3:00pm", textEntry);
});
$("#3pmText").val(localStorage.getItem("3:00pm"));

$("#4pmBtn").on("click", function () {
  var textEntry = $("#4pmText").val();
  localStorage.setItem("4:00pm", textEntry);
});
$("#4pmText").val(localStorage.getItem("4:00pm"));

$("#5pmBtn").on("click", function () {
  var textEntry = $("#5pmText").val();
  localStorage.setItem("5:00pm", textEntry);
});
$("#5pmText").val(localStorage.getItem("5:00pm"));
