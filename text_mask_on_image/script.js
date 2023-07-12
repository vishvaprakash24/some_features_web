let circle = document.querySelector('#circle');


window.addEventListener('mousemove', function(details){
    let xVal = details.clientX;
    let yVal = details.clientY;

    this.setTimeout(function(){
        circle.style.top = `${yVal}px`;
        circle.style.left = `${xVal}px`;
    }, 50);

    

})