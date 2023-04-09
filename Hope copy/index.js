function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var box  = document.getElementById('box');
var down = false;
function toggleNotifi(){
if (down) {
  box.style.height  = '0px';
  box.style.opacity = 0;
  down = false;
}else {
  box.style.height  = '490px';
  box.style.opacity = 1;
  down = true;
}
}

var course  = document.getElementById('courses');
var down = false;
function side(){
if (down) {
  course.style.height  = '0px';
  course.style.opacity = 0;
  course.style.transition = "0.3s";
  down = false;
}else {
  course.style.height  = '230px';
  course.style.opacity = 1;
  course.style.transition = "0.3s";
  down = true;
}
}




var a  = document.getElementById('fall');
var doosh = false;
function fallDown(){
if (doosh) {
  a.style.height  = '0px';
  a.style.opacity = 0;
  a.style.transition = "0.3s";
  doosh = false;
}else {
  a.style.height  = '500px';
  a.style.opacity = 1;
  a.style.transition = "0.3s";
  doosh = true;
}
}