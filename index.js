const randomColor = function () {
    const hex = '0123456789ABCDEF' // it contain 16 values where 10 value is interger 
    let color='#' ;               
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

randomColor()

let Interval
const startColorChange = function () {
    if(!Interval){
       let speed= document.querySelector(".speed").value;
       console.log(speed);
       if(speed===2){
        speed=speed*1000
        Interval=setInterval(startColor, speed)
       }else if(speed===3){
        speed=speed*1000
        Interval=setInterval(startColor, speed) 
       }else{
        speed=speed*1000
        Interval=setInterval(startColor, speed) 
       }
    
    }
    function startColor() {
        document.body.style.backgroundColor = randomColor();
    }
}
const stopColorChange = function () {
    clearInterval(Interval)
    Interval=null
}


document.querySelector(".start").addEventListener("click", startColorChange)
document.querySelector(".stop").addEventListener("click", stopColorChange)

