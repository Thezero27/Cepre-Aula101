//let usuario = document.getElementById("usuario")
//let pass = document.getElementById("password")




//----SI TE ATREVES A MANIPULAR EL CODIGO TE LA VERAS CONMIGO----
//--------Admin------|
usAdmin = "101"
passRoot = "101"
//----------------------|





const getValueInput = () => {
    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;
    

    if (usuario == usAdmin && pass == passRoot) {
        //var aviso = document.getElementById("error-login")
        //document.getElementById("error-login1").innerHTML = "Login correcto";
        window.navigator.vibrate(200);
        alert("¡ATENCION!\nEstás a punto de ver algunos datos de Algunos compañeros\npor tu seguridad no compartas ninguna información...")
        /* open("D:/HACKER/Hack/ANONYMOUS/Thezero/test/index3.html") */
        open("/Cepre-Aula101/index3.html")
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
        if (navigator.vibrate) {
            navigator.vibrate([500, 250, 100, 1000]);
        }
        /* $('#btnPromt').click(function(){
            swal({
                title: "Seguro que quieres hacer esto?",
                  text: "Esta acción ya no se podrá deshacer, Así que piénsalo bien.",
                  type: "warning",
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si, estoy seguro',
                  cancelButtonText: "Cancelar"
                });
        }); */
        
        //open("sabes-quien-soy/index2.html")
    }
    
    //----------IDOÑA--
    if (usuario == us1 && pass == pass1) {
        window.navigator.vibrate(200);
        alert("Telefono es--> +51 991833770\nDirección--> Jr. Piura 1199\nResttricciones--> Ley del Servicio Militar" )
        
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
        if (navigator.vibrate) {
            navigator.vibrate([500, 250, 100, 1000]);
        }
    }





    /* if (usuario != usroy) {
        //var aviso = document.getElementById("error-login")
        document.getElementById("error-login2").innerHTML = "Usuario incorrecto";
    }
    if (pass != passroy) {
        //var aviso = document.getElementById("error-login")
        document.getElementById("error-login3").innerHTML = "Contraseña incorrecto";
    }
    //ANDREA----------
    if (usuario == usandrea && pass == passan) {
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
        if (navigator.vibrate) {
            navigator.vibrate([500, 250, 100, 1000]);
        }
    }
    if (usuario != usandrea) {
        //var aviso = document.getElementById("error-login")
        document.getElementById("error-login2").innerHTML = "Usuario incorrecto";
    }
    if (pass != passan) {
        //var aviso = document.getElementById("error-login")
        document.getElementById("error-login3").innerHTML = "Contraseña incorrecto";
    } */


}
const getValueReset = () => {
    document.getElementById("error-login1").innerHTML = "";
    document.getElementById("error-login2").innerHTML = "";
    document.getElementById("error-login3").innerHTML = "";
    //document.getElementById("usuario").innerHTML = "";
    $("#us").html('<input name="usuario" placeholder="Usuario" class="form-control" type="text" id="usuario">');
    //document.getElementById("password").innerHTML = "";
    $("#ps").html('<input class="form-control" id="password" type="password" placeholder="password" name="password" data-minLength="5" data-error="some error" required />');
}


var cod01 = "0937483448"
var cod02 = "8492348857"
var cod03 = "8576885488"
var cod04 = "8574834959"
var cod05 = "7582399922"
var cod06 = "5638388299"
var cod07 = "4775655683"
var cod08 = "7464373845"
var cod09 = "3829193933"
var cod10 = "8372744842"
var cod11 = "3848492938"
var cod12 = "3727484832"
var cod13 = "7428829948"
var cod14 = "4777483733"
var cod15 = "9382884388"
var cod16 = "0282883782"
var cod17 = "2348483990"
var cod18 = "8388483429"
var cod19 = "2480394932"
var cod20 = "8848499399"
var cod21 = "8488383737"
var cod22 = "3882938839"
var cod23 = "8474839288"
var cod24 = "2384839932"
var cod25 = "4949838844"
var cod26 = "8437844329"
var Cod27 = "925529690"
var cod28 = "1248999392"
var Cod29 = "2738493999"
var Cod30 = "6544547642"

var red = document.getElementById("red")
red.onclick = function () {
    alert("Si estas leyendo esto eres un Desarrolador, pero tengo un codigo oculto que tu y yo sabemos lo escribes en la caja")
    //console.log("Si estas leyendo esto eres un Desarrolador, pero tengo un codigo oculto en algun lugar buscalo y lo escribes en la caja")
}
var enviar = document.getElementById("evaluar")

//var borrar = document.getElementById("borrar")

const getInput = () => {
    let entrada = document.getElementById("entrada").value
    if (entrada === Cod27) {
        alert("Lo lograste, eres todo un desarrollador")
        alert("El codigo secreto es --> " + entrada)
        alert("Mi nombre es Thezero... Si estas leyendo esto escribeme al whatsapp y te dire mi nombre.")
        
    } else {
        alert("Te equivocaste este no es el codigo!")
    }

}

const getReset = () => {
    //document.getElementById("entrada").innerHTML = "";
    $("#tr").html('<input class="entrada" maxlength="10" type="password" id="entrada" value="" required placeholder="escriba el codigo secreto">')
}





var envio = document.getElementById("envio")
envio.onclick = function (){
    let useg = document.getElementById("usuario").value;
    Thezero = "thezero"
    Yepeta = "yepeta"
    if (useg == Thezero) {
        $("#titulo").html("Thezero7")
    }
    if (useg == Yepeta) {
        $("#titulo").html("Yepeta4")
    }
    else {
        $("#titulo").html("Sin Login")
    }
}
var avatar = document.getElementById("avatar")
avatar.onclick = function (){
    alert("Angel-Gay")
}
