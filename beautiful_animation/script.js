let circle = document.querySelector('#circle');
const btn = document.querySelector('#btn');
const svgelem = document.querySelector('svg');


window.addEventListener('mousemove', function(details){
    let xVal = details.clientX;
    let yVal = details.clientY;

    this.setTimeout(function(){
        circle.style.top = `${yVal}px`;
        circle.style.left = `${xVal}px`;
    }, 50);

    

})

btn.addEventListener('click', function(){
    tl.reverse();
    setTimeout(function(){
        svgelem.classList.add('animate')
    }, 1000)
})

let tl = gsap.timeline();
tl
.from('#wrapper', {
    duration: 4,
    scale: 0.7,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from('#whitestrip', {
    duration: 2,
    width: 0,
    ease: 'Expo.easeInOut'
}, '-=2.5')
.from("#blackcard", {
    duration: 1.5,
    x: 50,
    opacity: 0,
    scale: 0.7,
    ease: 'Expo.easeInOut'
}, '-=1')
.from('#lineelem',{
    duration: 1.5,
    x: 50,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, "-=1")
.from('#lineelem .line', {
    duration: 2,
    width: 0,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, "-=1")
.from('#blackcard p', {
    duration: 1.2,
    y: 30,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, "-=2")
.from('#sideelem', {
    duration: 2,
    x: 30,
    opacity: 0,
    ease: 'Expo.easeInOut'
}, "-=1")