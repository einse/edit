function removeIntro(){
  $("#intro").remove();
}

$(document).keypress(function(event){
  if (event.keyCode == 13) { /* enter */
    $(".paragraph:last-child").after('<div class="paragraph" contentEditable="true"></div>');
    $(".paragraph:last-child").focus();
    event.preventDefault();
  }
  if (event.keyCode == 46) { /* delete */
    $(".paragraph:focus").remove();
  }
  if (event.keyCode == 33) { /* pageup */

  }
  if (event.keyCode == 34) { /* pagedown */
    
  }
  if (event.keyCode == 19) { /* pause */
    $(".paragraph:focus").addClass('b');
  }
});

function save() {
  var editor = $("#container");
  var text = editor.html();
  localStorage["inputText"] = text;
}
$(window).unload(save);

function open() {
  var editor = $("#container");
  var text = localStorage["inputText"];
  editor.html(text);
}
$(open);
