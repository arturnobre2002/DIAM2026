import{Container, Button} from 'react-bootstrap'

const Slideshow= () => {
    return(
        <section class="slideshow">
            <img id="slideshow" src='public/slideshow/parc.jpg' width="720px"/>
            <button onclick={clickSlideshowLeft}>{'<'}</button>
            <button onclick={clickSlideshowRight}>{'>'}</button>
        </section>
    );
    }

export default Slideshow;


let index = 0;
const slideshowImages = ['public/slideshow/parc.jpg', 'public/slideshow/kendrick.jpg', 'public/slideshow/pinkfloyd.jpg', 'public/slideshow/themarias.jpg'];
let slideshowTimer = setInterval(slideshowIterate, 5000);

function resetTimer() {
    clearInterval(slideshowTimer);
    setTimeout(() => {
        clearInterval(slideshowTimer); 
        slideshowTimer = setInterval(slideshowIterate, 5000);
    }, 10000); 
}

function slideshowIterate() {
    index++;
    if (index >= slideshowImages.length) index = 0;
    document.getElementById("slideshow").src = slideshowImages[index];
}

function clickSlideshowRight() {
    slideshowIterate();
    resetTimer();
}

function clickSlideshowLeft() {
    index--;
    if (index < 0) index = slideshowImages.length - 1;
    document.getElementById("slideshow").src = slideshowImages[index];
    resetTimer();
}