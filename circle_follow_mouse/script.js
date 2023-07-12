// 1). I need to get the current position ofthe mouse every time it moves.
// 2). I need to set those x and y values to the circular div.
//  every time mouse moves we should get notified = mouseMove listener
// every time listener gets notified, we need to get the values for x and y
// axis and then udate it to the circle.

let circle = document.querySelector('#circle');

window.addEventListener('mousemove', function(details){
    xValue = details.clientX;
    yValue = details.clientY;

    this.setTimeout(function(){
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    }, 10)
    

})