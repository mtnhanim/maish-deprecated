//Home page name animation
var text = "Maisha Taheyat";   
var speed = 40; // Interval between each letter (in milliseconds)
var i = 0;
var typewriter = document.querySelector('.name');

function typeWriter() {
  
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
//Home page name animation END


//ABout Page Image animation
const imageUrls = [
  "pics/mtn1.png",
  "pics/mtn2.jpg",
  "pics/mtn3.jpg",
  "pics/mtn4.jpg",
  "pics/mtn5.jpg",
  "pics/mtn6.jpg",
];

const ytUrls = [
  "https://www.youtube.com/embed/lVg8y-rERlk",
  "https://www.youtube.com/embed/OnvQggy3Ezw",
  "https://www.youtube.com/embed/EOxarwd3eTs",
  "https://www.youtube.com/embed/xVx2jyDPinw",
];



const imageElement = document.getElementById("image-frame");
const ytelement = document.getElementById("yt")

function displayImagesWithAnimation() {
  let index = 0;
  setInterval(() => {
    // Apply animation class to the image
    imageElement.classList.add("fade-in");
    
    // Set the image URL
    imageElement.src = imageUrls[index];
    
    // Increment index or reset to 0 if the last image is reached
    index = (index + 1) % imageUrls.length;
    
    // Remove the animation class after a certain time (adjust the duration as needed)
    setTimeout(() => {
      imageElement.classList.remove("fade-in");
    }, 4000); // Duration in milliseconds
  }, 6000); // Interval between image changes in milliseconds
}

displayImagesWithAnimation();



function displayytWithAnimation() {
  let index = 0;
  setInterval(() => {
    // Apply animation class to the image
    ytelement.classList.add("fade-in");
    
    // Set the image URL
    ytelement.src = ytUrls[index];
    
    // Increment index or reset to 0 if the last image is reached
    index = (index + 1) % ytUrls.length;
    
    // Remove the animation class after a certain time (adjust the duration as needed)
    setTimeout(() => {
      ytelement.classList.remove("fade-in");
    }, 2000); // Duration in milliseconds
  }, 5000); // Interval between image changes in milliseconds
}

displayytWithAnimation();


//ABout Page Image animation END


