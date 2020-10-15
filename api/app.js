const fraseAño = require("./library");

function funcionCallback(datos){
    console.log(datos.text)
}

fraseAño(funcionCallback);