window.addEventListener("DOMContentLoaded", () => {
  let canvasElement = document.querySelector("#canvas");
  let imageRandom = document.querySelector(".image-random");
  let context = canvasElement.getContext("2d");

  const IMAGES = ["img1.jpg", "img2.jpg", "img3.jpg"];
  const IMAGE_PATH = "assets/images/";

  const MIN_SECONDS = 4;
  const MAX_SECONDS = 8;

  const getRandomSeconds = () => {
    return Math.floor(Math.random() * (MAX_SECONDS - MIN_SECONDS + 1) + MIN_SECONDS) * 1000;
  };

  const getRandomImage = () => {
    let randomIndex = Math.floor(Math.random() * IMAGES.length);
    return IMAGES[randomIndex];
  };

  const setRandomImage = () => {
    let randomImage = getRandomImage();
    imageRandom.src = `${IMAGE_PATH}${randomImage}`;
  }

  const activateRandomImage = () => {
    setInterval(() => {
      setRandomImage();
    }, getRandomSeconds());
  }

  // circle
  context.beginPath();
  context.arc(60, 60, 50, 0, 2 * Math.PI);
  context.fillStyle = "#ffc600";
  context.fill();
  context.closePath();
  
  // triangle
  context.beginPath();
  context.moveTo(250, 14);
  context.lineTo(310, 110);
  context.lineTo(190, 110);
  context.fillStyle = "#5adbff";
  context.fill();
  context.closePath();

  // square
  context.beginPath();
  context.rect(386, 14, 100, 100);
  context.fillStyle = "#ff5a5f";
  context.fill();
  context.closePath();

  // line
  context.beginPath();
  context.moveTo(0, 150);
  context.lineTo(500, 150);
  context.strokeStyle = "#ff5a5f";
  context.stroke();
  context.closePath();

  // line
  context.beginPath();
  context.moveTo(0, 160);
  context.lineTo(500, 160);
  context.strokeStyle = "#ff5a5f";
  context.stroke();
  context.closePath();

  // text
  context.beginPath();
  context.font = "30px Arial";
  context.fillStyle = "#fafafa";
  context.fillText("Hello World", 180, 200);
  context.closePath();

  // line
  context.beginPath();
  context.moveTo(0, 215);
  context.lineTo(500, 215);
  context.strokeStyle = "#ff5a5f";
  context.stroke();
  context.closePath();

  // line
  context.beginPath();
  context.moveTo(0, 225);
  context.lineTo(500, 225);
  context.strokeStyle = "#ff5a5f";
  context.stroke();
  context.closePath();

  // Pentagon
  context.beginPath();
  context.moveTo(240, 250);
  context.lineTo(290, 250);
  context.lineTo(315, 300);
  context.lineTo(265, 350);
  context.lineTo(215, 300);
  context.fillStyle = "#20bf55";
  context.fill();

  // wave
  context.beginPath();
  context.moveTo(0, 450);
  context.quadraticCurveTo(50, 400, 100, 450);
  context.quadraticCurveTo(150, 500, 200, 450);
  context.quadraticCurveTo(250, 400, 300, 450);
  context.quadraticCurveTo(350, 500, 400, 450);
  context.quadraticCurveTo(450, 400, 500, 450);
  context.strokeStyle = "#fbfbff";
  context.stroke();

  // random image
  activateRandomImage();
});