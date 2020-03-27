var slideIndex = 1;

var myTimer;

var slideshowContainer;


window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 5000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
    if(slideshowContainer) {
      slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
    }
    
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 9000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 9000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 9000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if(slideshowContainer) {
    if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  }
  // if (n > slides.length) {slideIndex = 1}
  // if (n < 1) {slideIndex = slides.length}
  // for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  // }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  // slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}

// control bottom modal

let phoneIcon = document.querySelector('.phone_icon');
let bottomModal = document.querySelector('.modal');
let closeIcon = document.querySelector('.bottom_cross');

phoneIcon.addEventListener('click', () => {
  //bottomModal.style.width = '200px';
  bottomModal.style.right = 0;

  //bottomModal.style.display = 'block';
  
});

closeIcon.addEventListener('click', () => {
  bottomModal.style.right = '-350px';
  // bottomModal.style.width = '0';
  //bottomModal.style.display = 'none';
})

// CONTROL QUICK LINKS

// LINK FROM QUICK LINKS MODAL
let quickLinks = document.querySelectorAll('.quick_links');
console.log(quickLinks);

let linksModal = document.querySelector('#quick-links');


for(link of quickLinks){
  link.addEventListener('click', () => {
    console.log('how are you?');
    // linksModal.style.display = 'none';
    linksModal.style.width = '0';
  linksModal.style.left = '800px';
  });
}


// OPEN QUICK LINKS
let hamburgerMenu = document.querySelector('.fa-hamburger');

hamburgerMenu.addEventListener('click', () => {
  console.log('yes');
  linksModal.style.display = 'block'
  linksModal.style.width = '100vw';
  linksModal.style.left = '0';

})

// CLOSE QUICK LINKS

let closeQuickLinks = document.querySelector('#close');

closeQuickLinks.addEventListener('click', () => {
  linksModal.style.width = '0';
  linksModal.style.left = '800px';
  //linksModal.style.display = 'none'
  
});