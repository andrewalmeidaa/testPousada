// function clickMenu(){
//     if(itens.style.display == 'block'){
//         itens.style.display = 'none'
//     }else{
//         itens.style.display = 'block'
//     }
// }



function openNav(){
    document.getElementById('myNav').style.height = '100%'
    // pra alterar se vai sair dos lados ou de cima e so mudar height para width
}

function closeNav(){
    document.getElementById('myNav').style.height = '0'
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






