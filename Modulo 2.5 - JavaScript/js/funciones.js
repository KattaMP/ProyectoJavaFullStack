document.addEventListener("DOMContentLoaded", function(){
    //*Obtener el formulario y sus campos
    let form = document.querySelector("#form-contact");
    let nombre = document.querySelector("#name");
    let mail = document.querySelector("#email");
    let texto = document.querySelector("#text-area");


    function validate(){
        let emailValue = mail.value;
        let textoValue = texto.value;
        let nombreValue = nombre.value;      
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        
        // console.log(textoValue.value.length === 0);
        
        
        // if(nombreValue.length == 0  && emailValue.length == 0 && textoValue.length == 0 ) {
            //     console.log('estamos en el if');
            //     document.querySelector("#nameHelp").innerHTML = "El campo debe contener un nombre.";
            //     document.querySelector("#mailHelp").innerHTML = "El campo debe contener un email.";
            //     document.querySelector("#textHelp").innerHTML = "El campo debe algún mensaje.";
            
            //     return false;
            // }
            
            
        //* Validando la nombre        

        if(nombreValue.length == 0){
            document.querySelector("#nameHelp").innerHTML = "El campo no puede estar vacio";
            
        }else if(nombreValue.length < 2){
           document.querySelector("#nameHelp").innerHTML = "El nombre debe contener almenos 2 letras"     
                  
        }else{
           document.querySelector("#nameHelp").innerHTML = " ";
        }

        //* tiene que retornar true or false
        
        
   
        if(emailValue.length == 0){
            document.querySelector("#mailHelp").innerHTML = "El campo no puede estar vacio";
            
        }else if(!emailRegex.test(emailValue)){
           document.querySelector("#mailHelp").innerHTML = "Ingrese un email valido";
            
        }else{
           document.querySelector("#mailHelp").innerHTML = " ";
           
        }
        
        //* Validando la text vacio.
        
        
        if(textoValue.trim() == "" ){
            document.querySelector("#textHelp").innerHTML = "El campo no puede estar vacio.";
            
        }else{
            document.querySelector("#textHelp").innerHTML = " ";      
        }
        

        if (textoValue.length == 0 || emailValue.length == 0 || nombreValue.length <2){
            document.querySelector("#finalHelp").innerHTML = "Debe llenar todos los campos correctamente.";
            return false;
        }
        

        //* si todo esta bien y pasaron todas las validaciones, se enviara el formulario.
        return true;
    }
    
    //* Agregar la función de validación al evento  submit del formulario
    form.addEventListener("submit", function(event){

        //* Si la funcion validate retorna un false no enviar el formulario

        if(!validate()){

            event.preventDefault();
            
        } else {
            alert('El formulario se envio correctamente.');
        }
    })


});

//* Documento que se activa cuando se a cargado todo el archivo HTML y se ha construido el DOM

