function validar(){
    var nombreFormulario,apellidosFormulario,dniFormulario,mailFormulario,fechaFormulario,telefonoFormulario;
    nombre = document.getElementById("nombreFormulario").value;
    apellidos = document.getElementById("apellidosFormulario").value;
    dni = document.getElementById("dniFormulario").value;
    email = document.getElementById("mailFormulario").value;
    fecha = document.getElementById("fechaFormulario").value;
    telefono = document.getElementById("telefonoFormulario").value;

    expresion_email = /\w+@\w+\.+[a-z]/;                        //Ej: xxxx@xxx.xx
    expresion_dni = /^\d{8}[A-Z]$/;                             //Ej: 0000000H
    expresion_nombre = /^[A-Z]{1}[a-z]/;                        //Ej: Manuel
    expresion_apellidos = /^[A-Z]{1}[a-z]+\s+[A-Z]{1}[a-z]/;    //Ej: Perez Perez
    
    if(!expresion_nombre.test(nombre)){
        swal("Nombre!", "El campo Nombre no es correcto! Debe comenzar por mayúscula", "error");
        return false;
    } 
    else if(!expresion_apellidos.test(apellidos)){
        swal("Apellidos!", "El campo Apellidos no es correcto! Deben comenzar por mayúscula", "error");
        return false;
    } 
    else if(!expresion_dni.test(dni)){
        swal("Dni!", "El campo Dni no es correcto! (ej: 97857965X)", "error");
        return false;
    }
    else if(!expresion_email.test(email)){
        /* alert("error en el mail"); */
        swal("Email!", "El campo email no es correcto!", "error");
        return false;
    }
    else if(isNaN(telefono)){
        swal("Teléfono!", "El campo teléfono no es correcto!", "error");
        return false;
    }
    /*  else {
        if(!await swal({text: 'Are you sure?', buttons: true})) {
            return; }  
    } */
}
