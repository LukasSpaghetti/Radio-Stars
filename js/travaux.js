const img = document.querySelector('.travaux svg');
let angle = 0;
function rotateImage() {
    angle += 2; 
    img.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(rotateImage);
}
rotateImage();
// FAIT PAR L'IA
