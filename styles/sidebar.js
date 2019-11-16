//// Script to open and close sidebar
//function w3_open() {
//  document.getElementById("mySidebar").style.display = "block";
//  document.getElementById("myOverlay").style.display = "block";
//}
// 
//function w3_close() {
//  document.getElementById("mySidebar").style.display = "none";
//  document.getElementById("myOverlay").style.display = "none";
//}
//
//// Modal Image Gallery
//function onClick(element) {
//  document.getElementById("img01").src = element.src;
//  document.getElementById("modal01").style.display = "block";
//  var captionText = document.getElementById("caption");
//  captionText.innerHTML = element.alt;
//}


document.write('\
\
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>\
<link rel="stylesheet" href="/styles/sidebar.css"></link>\
\
\<ul class="sideBar">\
\
\
<li class="logo">William Reed Quinn</li>\
\
<li><a href="/index.html">Home</a></li>\
<li><a href="/about/index.html">About Me</a></li>\
<li><a href="/cv/quinn-cv.pdf">CV</a></li>\
\
\
</ul>\
')