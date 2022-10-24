const point = document.querySelector(".point");
function HandlePointEnter() {

}


let temp = 0.1;
//jquery 쓰면 더 이쁜식으로짤수있음.뿪
let t = setInterval(() => {

  // point.animate();
  let p_top = (point.style.top);
  p_top = parseFloat((p_top.replace('px', '')));
  //확인함
  if (p_top >= 2) {
    temp = -0.1;
  }
  else if (p_top <= 0) {
    temp = 0.1;
  }


  let pixel = (p_top + temp) + "px";

  point.style.top = pixel;

}, 100);

const slider = document.querySelector(".sliderBanner");
const sliderLis = slider.querySelectorAll("li");
let curSliderIndex = 0;
let xstring;

let sliderfunction = setInterval(() => {

   const length = sliderLis.length;

   xstring = (-curSliderIndex * 100) + "%";
   curSliderIndex++;  

  if(curSliderIndex === length)
      curSliderIndex = 0;
   
   for(let i = 0; i < length; i++)
   {
     //sliderLis[i].style.transform = "translateX(-100%)";
     sliderLis[i].style.transform = "translateX(" + xstring + ")";
   }

}, 5000);