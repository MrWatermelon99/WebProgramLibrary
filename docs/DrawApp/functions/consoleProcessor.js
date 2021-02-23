export var consoleProc;

var consoleProc = (function(){
  
  var publicCalls = {};
  
  var publicCalls.log = function(mess, cont, size, color){
    
    var color = color ? color : "#A6A6A6";
    
    var p = document.createElement("p");
    p.innterHTML = mess;
    p.style.color = color;
    p.style.fontSize = size + "px";
    
    cont = document.getElementById(cont);
    cont.appendChild(p);
    
    cont.scrollTop = cont.scrollHeight;
    
  }
  
})();
