'use strict';

var button = document.getElementById('js-next');
var wrapper = document.querySelector('.wrapper-inner');
var st = window.getComputedStyle(wrapper, null);

function getTransformPlace() {
  var tr = st.getPropertyValue("-webkit-transform") ||
    st.getPropertyValue("-moz-transform") ||
    st.getPropertyValue("-ms-transform") ||
    st.getPropertyValue("-o-transform") ||
    st.getPropertyValue("transform") ||
    "Either no transform set, or browser doesn't do getComputedStyle";

    return tr;
}

function getTransformV() {
  var matrix = getTransformPlace();
  return matrix.split(',')[5].slice(0,-1);
}


button.addEventListener('click', ()=>{
  // changeDirection();
  var currentPosition = getTransformV();
  currentPosition =- window.innerHeight;
  wrapper.style.transform = 'matrix(1,0,0,1,0,' + currentPosition + ')';
});

// don't work ? :( 
window.addEventListener('scroll', ()=>{
  // direction ? top, bottom
  // change window position DRY
  console.log('SCROLLLLL');
});