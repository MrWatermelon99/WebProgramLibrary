export let log;
var set = JSON.parse(consSet);


var log = function(mess){
  console.log(mess);
  append(mess, set.color[0]);
  return;
}

//add the text to the div
function append(message, color){
  console = document.getElementById("newCons");
  var txt = document.createElement("p");
  txt.innterHTML = message;
  txt.style.color = color;
  txt.style.fontSize = set.size;
  txt.className = "consItem";
  console.style.fontSize = set.size;
  console.appendChild(txt);
  console.scrollTop = console.scrollHeight; 
  return;
}
