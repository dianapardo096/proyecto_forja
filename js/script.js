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

function documento(){

}