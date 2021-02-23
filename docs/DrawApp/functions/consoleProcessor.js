export let log;

var log = function(mess, cont, size, color){
  
  var color = color ? color : "#A6A6A6";
  
  var p = document.createElement("p");
  p.innterHTML = mess;
  p.style.color = color;
  p.style.fontSize = size + "px";
  
  
  
}

function append(child, parent){
  
  parent = document.getElementById(parent);
  parent.appendChild(child);
  parent.scrollTop = parent.scrollHeight; 
  return();
  
}
