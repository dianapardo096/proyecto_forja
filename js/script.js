
//Funcion para confirmar usuario y contraseña del login

function ingreso(){

    let user=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    var p="Kuepa2022";
    var u="Admin";

    if(user==u && password==p){    

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido',
            showConfirmButton: false,
            timer: 1500
          }).then((value) => {
            window.location. href='dashboard.html'
          });
    } else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos',
            confirmButtonColor: '#F3610E',
            footer: '<a href="">¿Olvidaste tu contraseña?</a>'
          })
    }
}


//Funcion para confirmar numeros de documento en el dash board
function documento(){
    let doc=document.getElementById("Doc").value;

    if (doc==52368795){
        Swal.fire({
            icon: 'info',
            title: 'Señor usuario',
            text: 'El paciente identificado con el número '+doc+' ya cuenta con la primera dosis del esquema',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Revisar',
            confirmButtonColor: '#F3610E',
            cancelButtonText: 'Cancelar',
          }).then((result) => {

            if (result.isConfirmed) {
              Swal.fire({
                title: 'Myriam Avila Vargas',
                html:'<b>Documento:</b>52368795<br><h2>Primera dosis</h2><b>Fecha de Aplicación:</b>09/03/2022<br><b>Sede:</b>Titán Plaza<br><b>Nombre del biológico:</b> Pfizer',
                confirmButtonText: 'Registrar dosis',
                confirmButtonColor: '#F3610E',
              }).then((value) => {
                window.location. href='registro_vacunas.html'
              });
            }
          })
        
    }else if (doc==1001235478){
        Swal.fire({
            icon: 'info',
            title: 'Señor usuario',
            text: 'El paciente identificado con el número '+doc+' ya cuenta con dos dosis del esquema',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Revisar',
            confirmButtonColor: '#F3610E',
            cancelButtonText: 'Cancelar',
          }).then((result) => {

            if (result.isConfirmed) {
              Swal.fire({
                title: 'Sebastian Avila Vargas',
                html:'<b>Documento:</b>1001235478<br><h2>Primera dosis</h2><b>Fecha de Aplicación:</b>09/09/2021<br><b>Sede:</b>Titán Plaza<br><b>Nombre del biológico:</b> AstraZeneca <h2>Segunda dosis</h2><b>Fecha de Aplicación:</b>15/02/2022<br><b>Sede:</b>Bulevar Niza<br><b>Nombre del biológico:</b>AstraZeneca',
                confirmButtonText: 'Registrar dosis',
                confirmButtonColor: '#F3610E',
              }).then((value) => {
                window.location. href='registro_vacunas.html'
              });
            } 
          })
    }else if (doc==25413574){
        Swal.fire({
            icon: 'info',
            title: 'Señor usuario',
            text: 'El paciente identificado con el número '+doc+' ya cuenta con el esquema de vacunación completo',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Revisar',
            confirmButtonColor: '#F3610E',
            cancelButtonText: 'Cancelar',
          }).then((result) => {

            if (result.isConfirmed) {
              Swal.fire({
                title: 'Ana Teresa Vargas Torres',
                html:'<b>Documento:</b>25413574<br><h2>Primera dosis</h2><b>Fecha de Aplicación:</b>09/03/2021<br><b>Sede:</b>Titán Plaza<br><b>Nombre del biológico:</b> Sinovac <h2>Segunda dosis</h2><b>Fecha de Aplicación:</b>15/04/2021<br><b>Sede:</b>Bulevar Niza<br><b>Nombre del biológico:</b> Sinovac <h2>Tercera dosis</h2><b>Fecha de Aplicación:</b> 04/11/2021<br><b>Sede:</b> Bulevar Niza<br><b>Nombre del biológico:</b> Moderna',
                confirmButtonText: 'ok',
                confirmButtonColor: '#F3610E',
              })
            } 
          })
    }else if (doc==1007203506){
        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Señor usuario',
            text: 'El paciente identificado con el número '+doc+' no cuenta con ninguna dosis del esquema',
            confirmButtonText:
            'Registrar',
            confirmButtonColor: '#F3610E',
          }).then((value) => {
            window.location. href='registro.html'
          });
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Usuario no valido',
            confirmButtonText:
            'Regresar',
            confirmButtonColor: '#F3610E',
          })
    }

}

// funcion para datos registrados
function guardado(){

  Swal.fire({
    title: '¿Desea guardar estos datos?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#008f39',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Guardar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        title: 'Datos guardados con éxito',
        confirmButtonText: 'ok',
        confirmButtonColor: '#F3610E',
      }).then((value) => {
        window.location. href='dashboard.html'
      });
    }
  })
}

// funcion para cerrar sesion

function salir(){

  Swal.fire({
    icon: 'info',
    title: '¿Desea cerrar sesión?',
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: 'Salir',
    confirmButtonColor: '#F3610E',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cerrando sesión',
        showConfirmButton: false,
        timer: 1500
      }).then((value) => {
        window.location. href='login.html'
      });
    }
  })
}