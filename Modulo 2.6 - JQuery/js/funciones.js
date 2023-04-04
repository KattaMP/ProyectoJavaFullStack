let table = new DataTable('#miTabla', {
    responsive: true
});

$(document).ready( function () {    
    
    var table = $('#miTabla').DataTable();
    /*
    $("#agregar").on("click",function(){
    const inputName     = $("#name").val().trim();
    const inputLastName = $("#last-name").val().trim();
    const inputEmail    = $("#email").val().trim();
    const inputPhone    = $("#phone").val().trim();
    const inputAddress  = $("#address").val().trim();    
    
    if (inputName.length == 0 || inputLastName.length == 0 || inputEmail.length == 0 || inputPhone.length == 0 ||inputAddress.length == 0){
        $("#generalHelp").text("Debe llenar todos los campos")
        console.log("Hola");
    }        
    else if(inputName.length > 0 && inputLastName.length > 0 &&inputEmail.length > 0 &&inputPhone.length > 0 &&inputAddress.length > 0){
        $("#generalHelp").text(" ")

        const newLine     = $("<tr class='even'></tr>");
        const newName     = $("<td></td>").text(inputName);
        const newLastName = $("<td></td>").text(inputLastName);
        const newEmail    = $("<td></td>").text(inputEmail);
        const newPhone    = $("<td></td>").text(inputPhone);
        const newAddress  = $("<td></td>").text(inputAddress);
        newLine.append(newName,newLastName,newEmail,newPhone,newAddress);

        $("tbody").append(newLine);
        
        //$("tbody tr.odd").remove()
        
        //*Limpieza de contenido de entrada
        inputName.val("");
        inputLastName.val("");
        inputEmail.val("");
        inputPhone.val("");   
        inputAddress.val(""); 
    }

    });
    */

    /* Para insertar nueva fila como objetos
    $('#miTabla').DataTable( {
        data: data,
        columns: [
            { data: 'name' },
            { data: 'last-name' },
            { data: 'email' },
            { data: 'phone' },
            { data: 'address' }
        ]
    } );
    */

    // insertar fila con funcion de API
    $("#agregar").on("click",function(){
        const inputName     = $("#name").val().trim();
        const inputLastName = $("#last-name").val().trim();
        const inputEmail    = $("#email").val().trim();
        const inputPhone    = $("#phone").val().trim();
        const inputAddress  = $("#address").val().trim();
        
        if (inputName.length == 0 || 
            inputLastName.length == 0 || 
            inputEmail.length == 0 || 
            inputPhone.length == 0 ||
            inputAddress.length == 0){
            $("#generalHelp").text("Debe llenar todos los campos");
            
        }        
        else if(inputName.length > 0
             && inputLastName.length > 0
             &&inputEmail.length > 0
             &&inputPhone.length > 0
             &&inputAddress.length > 0){        
            $("#generalHelp").text(" ");

            table.row.add([inputName,inputLastName,inputEmail,inputPhone,inputAddress] ).draw(false);    
               
            //*Limpieza de contenido de entrada
            $("#name").val("");
            $("#last-name").val("");
            $("#email").val("");
            $("#phone").val("");
            $("#address").val("");
        }
    });
    
});

/* Validacion con JavaScript puro
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
*/

//* Documento que se activa cuando se a cargado todo el archivo HTML y se ha construido el DOM

        //* Agregando fila sin plugin dataTable
       /* if (inputName.length == 0 || inputLastName.length == 0 || inputEmail.length == 0 || inputPhone.length == 0 ||inputAddress.length == 0){
            $("#generalHelp").text("Debe llenar todos los campos")
        }        
        else if(inputName.length > 0 && inputLastName.length > 0 &&inputEmail.length > 0 &&inputPhone.length > 0 &&inputAddress.length > 0){

            const newLine     = $("<tr class='even'></tr>");
            const newName     = $("<td></td>").text(inputName);
            const newLastName = $("<td></td>").text(inputLastName);
            const newEmail    = $("<td></td>").text(inputEmail);
            const newPhone    = $("<td></td>").text(inputPhone);
            const newAddress  = $("<td></td>").text(inputAddress);

            newLine.append(newName,newLastName,newEmail,newPhone,newAddress);
            $("tbody").append(newLine);
            
            //$("tbody tr.odd").remove()
            
            //*Limpieza de contenido de entrada
            inputName.val("");
            inputLastName.val("");
            inputEmail.val("");
            inputPhone.val("");   
            inputAddress.val(""); 
        } */
        //* Fin de Agregado de fila sin plugin.


//tbody.insertAdjacentHTML("beforeend", `<tr>td>${fila.nombres}</td><td>${fila.apellidos}</td><td>${fila.email}</td><td>${fila.telefono}</td><td>${fila.direccion}</td></tr>`);