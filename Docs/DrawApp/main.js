// import functions from the files in /functions
import colors from './functions/colors.js';

// canvas code
var c = document.getElementById("c");
var ctx = c.getContext("2d");

document.getElementById("b").innerHTML = colors.Hex2Array("#FFFFFF");
