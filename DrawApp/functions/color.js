 PenColor = "FFFFFF";

var colors = (function (){
  
  var PublicCalls = {};
  
  var PublicCalls.set = function(array) {
    
    PenColor = PublicCalls.Array2Hex(array);
    return PenColor;
    
  }
  
  var PublicCalls.interpolate = function(color1, color2) {
    
    var factor = 0.5;
    var value = color1.slice();
    
    for (var i=0;i<3;i++) {
      value[i] = Math.round(value[i] + factor * (color2[i] - color1[i]));
    }
    return value;
    
  }
  
  var PublicCalls.Hex2Array = function(array) {
  
    var value = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return value ? [
        parseInt(value[1], 16),
        parseInt(value[2], 16),
        parseInt(value[3], 16)
    ] : null;
  
  }
  
  var PublicCalls.Array2Hex = function(hex) {
    
    var value = ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]);
    value = value.toString(16).slice(1);
    return "#" + value;
  
  }
  
})();

export var colors;
