// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

document.write('\
\
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>\
<link rel="stylesheet" href="/styles/sidebar.css"></link>\
\
<nav class="sidebar">\
<br></br>\
<br></br>\
\
\
<div class="w3-container">\
<h3><a href="/index.html">William Reed Quinn</a></h3>\
</div>\
\
\
<div class="w3-bar-block">\
<a href="/about/index.html" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">About Me</a>\
<a href="/cv/quinn-cv.pdf" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">CV</a>\
<a href="" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Github (in the works)</a>\
</div>\
\
\
\
</nav>\
')


//document.write('\
//\
//<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>\
//<link rel="stylesheet" href="/styles/sidebar.css"></link>\
//\
//<nav class="w3-sidebar w3-indigo w3-collapse w3-top w3-large w3-padding" style="z-index:3;width:300px;font-weight:bold;box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);">\
//<br></br>\
//\
//\
//\
//<div class="w3-container">\
//<h3 class="w3-padding-64">William Reed Quinn</h3>\
//</div>\
//\
//\
//<div class="w3-bar-block">\
//<a href="/about/index.html" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">About Me</a>\
//<a href="/cv/quinn-cv.pdf" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">CV</a>\
//<a href="" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Github (in the works)</a>\
//</div>\
//\
//\
//\
//</nav>\
//')
