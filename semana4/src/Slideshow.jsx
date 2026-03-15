const Slideshow = () => {
    return(
        <section className="text-center my-4">
            <div className="d-inline-block">
                <img id="slideshow" src="/slideshow/parc.jpg" className="img-fluid" style={{maxHeight: '400px', objectFit: 'cover', width: '100%'}} alt="Slideshow" />
            </div>
            <div className="mt-3">
                <button onClick={clickSlideshowLeft} className="btn botao-fundo-castanho mx-2 px-4 fw-bold">{'<'}</button>
                <button onClick={clickSlideshowRight} className="btn botao-fundo-castanho mx-2 px-4 fw-bold">{'>'}</button>
            </div>
        </section>
    );
}

export default Slideshow;

let index = 0;
const slideshowImages = ['/slideshow/parc.jpg', '/slideshow/kendrick.jpg', '/slideshow/pinkfloyd.jpg', '/slideshow/themarias.jpg'];
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
    document.getElementById("slideshow").src=slideshowImages[index];
    resetTimer();
}