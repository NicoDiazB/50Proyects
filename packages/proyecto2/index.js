const progress = document.querySelector(".progress")
const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")
const points = document.querySelectorAll(".point")

let currentPoint = 1;

function update(){
    points.forEach((point, i)=>{
        if(i < currentPoint){
            point.classList.add("active")
        }
        else{
            point.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active")

    progress.style.width = (actives.length - 1 ) / (points.length -1 ) * 100 + '%'

    if(currentPoint === 1 ){
        prevBtn.disabled = true
    }
    else if (currentPoint === points.length){
        nextBtn.disabled = true
    }
    else{
        prevBtn.disabled = false
        nextBtn.disabled = false
    }

}


nextBtn.addEventListener("click", (e)=>{
    // e.preventDefault();
    currentPoint++;
    if(currentPoint > points.length){
        currentPoint = points.length
    }
    update()
})

prevBtn.addEventListener("click", (e)=>{
    // e.preventDefault();
    currentPoint--;
    if(currentPoint < 1){
        currentPoint = 1
    }
    update()
})