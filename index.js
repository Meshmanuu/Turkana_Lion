// Get the image element
const image = document.querySelector('main img');

// Define an array of image sources
const imageSources = [
  'img/img1.jpeg',
  'img/img2.jpeg',
  'img/img3.jpeg',
  'img/img4.jpeg',
  'img/img5.jpeg',
  // Add more image sources as needed
];

// Define a counter for the image sources
let imageCounter = 0;

// Function to change the image source
function changeImage() {
  image.src = imageSources[imageCounter];
  imageCounter = (imageCounter + 1) % imageSources.length;
}

// Call the changeImage function every 3 seconds
setInterval(changeImage, 3000);

// Get the main section element
const mainSection = document.querySelector('main');

// Define an array of background colors
const backgroundColors = [
  'orange',
  'purple',
  'cyan',
  'red',
  'purple',
  'green',
  // Add more background colors as needed
];

// Define a counter for the background colors
let backgroundColorCounter = 0;

// Function to change the background color
function changeBackgroundColor() {
  mainSection.style.backgroundColor = backgroundColors[backgroundColorCounter];
  backgroundColorCounter = (backgroundColorCounter + 1) % backgroundColors.length;
}

// Call the changeBackgroundColor function every 3 seconds
setInterval(changeBackgroundColor, 3000);

// Get the text element
const text = document.querySelector('main p');

// Define an array of text contents
const textContents = [
  'Arsenal Football Club is a professional football club based in Islington, London, England.',
  'Arsenal plays in the Premier League, the top flight of English football.',
  'The club has a rich history and has won many domestic and international titles.',
  // Add more text contents as needed
];

// Define a counter for the text contents
let textCounter = 0;

// Function to change the text content
function changeText() {
  text.textContent = textContents[textCounter];
  textCounter = (textCounter + 1) % textContents.length;
}

// Add an event listener to the text element to change the text content when clicked
text.addEventListener('click', changeText);



