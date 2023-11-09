$(document).ready(function () {
  $(".collapsible-wrapper .collapsible").click(function (e) {
    e.preventDefault();
    var content = $(this).nextAll(".content, .content-questions");
    var icon = $(this).find(".icon");
    if (content.is(":visible")) {
      icon.text("-");
    } else {
      icon.text("+");
    }
  });
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
