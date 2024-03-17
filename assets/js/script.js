function pintar(ele, color = 'green'){
    ele.style.backgroundColor = color
}

document.getElementById('ele1').addEventListener('click', function(event){
    pintar(event.target, 'yellow')
})

