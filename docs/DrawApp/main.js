// import functions from the files in /functions
import * as colors from 'functions/colors.js';
import * as cons from 'functions/cons.js';

// canvas code
var c = document.getElementById("c");
var ctx = c.getContext("2d");

document.getElementById("b").innerHTML = colors.Hex2Array("#FFFFFF");

cons.log("hello");

window.alert(cons);
