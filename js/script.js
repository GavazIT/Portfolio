
window.onload = (event) => {
  const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX + 4;
    let topPosition = e.pageY + 4;

    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
})
  var bio = document.getElementById("bio");

  const texts = [ 'A experienced front-end developer', 'Working with HTML, CSS, JS', 'Experienced with Photoshop, Lightroom, Illustrator'];
const speed = 150;
const pause = 500;

      typeWriter();
      function typeWriter(i=0, index=1, direction=1) {
        let displayed = texts[i].slice(0, index);
        document.querySelector("#bio").textContent = displayed;
        if (displayed.length >= texts[i].length) { // start removing after pause
          setTimeout(() => typeWriter(i, index-1, -1), pause);
        } else if (displayed.length === 0) { // go to next text after pause
          setTimeout(() => typeWriter((i+1) % texts.length), pause);
        } else { // continue in the current direction
          setTimeout(() => typeWriter(i, index+direction, direction), speed);
        }
      }
      
      

};

var i_slides = 1;
var shown = 0;
function addSlide(i){
  if(i>0){
  if(i_slides == 3){

    i_slides = 1;
  }else{i_slides++;}}
  else {
    if(i_slides ==1){
      i_slides =3;
    }else{
    i_slides--;
  }
}
slide();
}
function slide(){
  switch(i_slides){
    case 1:
      document.getElementById("img_art").src= "img/gavamelone.png";
      document.getElementById("p_art").innerHTML= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
      break;
      case 2:
      document.getElementById("img_art").src= "img/cc.png";
      document.getElementById("p_art").innerHTML= "GavaMelone Bla Bla blaBla Bla blaBla Bla blaBla Bla blaBla Bla blaBla Bla bla";
      break;
      case 3:
      document.getElementById("img_art").src= "img/gavamelone.png";
      document.getElementById("p_art").innerHTML= "GavaMelone Bla Bla blaBla Bla blaBla Bla blaBla Bla blaBla Bla blaBla Bla bla";
      break;
  }
}
function setSlides(i){
  switch(i){
    case 1:
      i_slides= 1;
      if(shown!=0){
        document.getElementsByClassName('shown')[0].classList.remove("shown");
        document.getElementById('circles').children[0].classList.add("shown");
        shown=0;
      }
    break;
    case 2:
      i_slides= 2;
      if(shown!=1){
        document.getElementsByClassName('shown')[0].classList.remove("shown");
        document.getElementById('circles').children[1].classList.add("shown");
        shown=1;
      }
    break;
    case 3:
      i_slides= 3;
      if(shown!=2){
        document.getElementsByClassName('shown')[0].classList.remove("shown");
        document.getElementById('circles').children[2].classList.add("shown");
        shown=2;
      }
    break;
  }
  slide();
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];                                      
  xDown = firstTouch.clientX;                                      
  yDown = firstTouch.clientY;                                      
};                                                
                                                                       
function handleTouchMove(evt) {
  if ( ! xDown || ! yDown ) {
      return;
  }

  var xUp = evt.touches[0].clientX;                                    
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;
                                                                       
  if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
      if ( xDiff > 0 ) {
          addSlide(1);
      } else {
        addSlide(-1);
      }                       
  } 
  /* reset values */
  xDown = null;
  yDown = null;                                             
};
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu-container").style.top = "0";
  } else {
    document.getElementById("menu-container").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
} 
const copyListener = (event) => {
  const range = window.getSelection().getRangeAt(0),
    rangeContents = range.cloneContents(),
    pageLink = `Read more at: ${document.location.href}`,
    helper = document.createElement("div");

  helper.appendChild(rangeContents);

  event.clipboardData.setData("text/plain", `${helper.innerText}\n${pageLink}`);
  event.clipboardData.setData("text/html", `${helper.innerHTML}<br>${pageLink}`);
  event.preventDefault();
};
document.addEventListener("copy", copyListener);