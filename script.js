var mobileMenu = document.getElementsByClassName('mobile-menu')[0];
var nav = document.getElementsByClassName('nav')[0];
nav.style.display = 'none';
mobileMenu.onclick = function() {
   if(nav.style.display == 'none'){
       nav.style.display = 'block';
   }else{
       nav.style.display = 'none';
   }
}