function removeIntro(){
  $("#intro").remove();
}

$(document).keypress(function(event){
  if (event.keyCode == 13) { /* enter */
    $(".paragraph:last-child").after('<div class="paragraph" contentEditable="true"></div>');
    $(".paragraph:last-child").focus();
    event.preventDefault();
  }
  console.log("keypress: " + event.keyCode);
});

$(document).keydown(function(event){
	if (event.keyCode == 19) { /* pause */
    $(".paragraph:focus").addClass('b');
  }
  if (event.keyCode == 33) { /* pageup */

  }
  if (event.keyCode == 34) { /* pagedown */
    
  }
  if (event.keyCode == 46) { /* delete */
		event.preventDefault();
		var p = $(".paragraph:focus");
		var pNew = p.prev();
		if (pNew.length === 0) {
			pNew = p.next();
		}
		if (p.length !== 0) {
			var pHtml = p.html();
			var pArray = $(".paragraph");
			console.log(pHtml.length + " " + pArray.length);
			if (pHtml.length === 0 && pArray.length > 1) {
				$(".paragraph:focus").remove();
				pNew.focus();
			}
		}
  }
  console.log("keydown: " + event.keyCode);
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
