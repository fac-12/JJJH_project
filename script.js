function menuFunction() {
  var x = document.getElementById('header__nav');
  if(x.className === "header__nav") x.className += " responsive";
  else x.className = "header__nav";
}
