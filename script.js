function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{
        itens.style.display = 'block'
    }
}


let count = 1

document.getElementById("containerServicesOptionsGastronomiaTextImg-radio1").checked = true

setInterval(function(){
    nextImage()
},5000)

function nextImage(){
    count++
    if(count>3){
        count = 1
    }
    document.getElementById("containerServicesOptionsGastronomiaTextImg-radio"+count).checked = true
}



