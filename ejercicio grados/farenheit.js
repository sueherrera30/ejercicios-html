function convertidor(farenheit){
 var farenheit =document.getElementById('farenheit').value
 var resultado = (farenheit - 32)* 5/9;
 document.getElementById('celsius').value = resultado
}

function convertidorDos(celsius){
 var celsius = document.getElementById('celsius').value
 var resultado = (celsius *1.8) +32;
 document.getElementById('farenheit').value = resultado
}
