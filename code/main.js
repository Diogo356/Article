
//aqui eu adc um escutador de evento, que executa o segundo argumento(função) após a pagina ser carregada.

function none() {
    const value = document.getElementById('share')
    if(value.style.display === "none")
        value.style.display = 'flex'
    else
        value.style.display = "none"
}


document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('fa-share').onclick = none;
})