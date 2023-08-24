$(document).ready(function() {
    $("#contact_form").validate({
      rules: {
        name : {
          required: true,
        },
        apellido: {
            required: true,
        },
        email: {
          required: true,
          email: true
        },
        estudio: {
            required: true,
            minlength: 1
        },
        telefono:{
            required: true,
            alphanumeric: false,
            minlength: 8,
            maxlength: 8
        },
        genero:{
            required:true,
            minlength:1
        },
        fecha:{
            required:true,
            date: true,
            dateITA : true,
        }
      },
      errorLabelContainer: ".js-errors",
        errorElement: "li",
      messages : {
        name: {
            required: "El nombre es requerido"
        },
        apellido: {
            required: "El apellido es requerido"
        },
        email: {
          required: "El correo es requerido",
          email: "El correo debe tener el fornato: abc@dominio.tld"
        },
        estudio: {
          required: "Debe seleccionar al menos 1 opcion de grado academico  ",
        },
        genero:{
            required: "Debe seleccionar al menos 1 opcion de genero",
        },
        telefono:{
            required: "El numero de telefono es requerido",
            minlength: "El numero es muy corto debe tener 8 digitos",
            maxlength: "El numero es muy largo debe tener 8 digitos"
        },
        fecha:{
            required: "Debe seleccionar una fecha"
        }
        
      }
    });
 });

 
 function calcularEdad() {
    var hoy = new Date();
    var cumpleanos = document.getElementById('form6Example5').valueAsDate;
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
}

function updateTextRango(val) {
  document.getElementById('numRango').value=val; 
}


function  api(){
  const options = {
    method: 'GET',
    async: true
  };
  
  
  const email = mail = document.getElementById("form6Example3").value
  console.log(email)
  
  
  fetch(`https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_5dk5UcCOcLVAYOLSkiZx0gWaRRhZc&emailAddress=${email}`, options)
    .then(response => response.json())
    .then(response => existe(response))
    .catch(err => console.error(err));
  }
  
  
  function existe({smtpCheck}){
      if (smtpCheck === "true") {
          console.log("trus")
         document.getElementById("errorLi").outerHTML = ""
      }else{
          console.log("false")
          errors = document.getElementById("errores")
          errors.innerHTML += "    <li id='errorLi'>El correo ingresado no existe</li>"
      }
  }

