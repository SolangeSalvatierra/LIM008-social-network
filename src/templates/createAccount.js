import {signInOnSubmitCreate, signInOnSubmitGoogle, signInOnSubmitFacebook, changeHash} from "../view-controller.js";
//no es necesario poner el .js
// import {formIngresarCuenta} from "./login.js"

export  default () => {
    const form = document.createElement('form');
    const  contenidoForm  =  `
<<<<<<< HEAD
    <div   class="conteiner">
    <img src="ima/traveller.1.png" class="img-logo">
    <h2> Registro de usuarios </h2>
    <div>
        <label> Regístrate con:
        <div>
        <img id="auth-fb" alt="ico-fb" class="ico-fb" src="https://i.ibb.co/NmxyWjL/ico-fb.png" />
        <img id="auth-google" alt="ico-google" class="ico-google" src="https://i.ibb.co/xgLXQrr/ico-gg.png" />
        </div>
        </label>
    </div>
            <div>                
            <input  class="text-field" id = "email" type = "email" placeholder = "Correo">
            <input  class="text-field" id = "password" type = "password" placeholder = "Contraseña">
=======
    <div class='resgister'>
        <h4> Registro de usuarios </h4>
            <div>
                <label>Regístrate con:</label>
                <img id="auth-fb" alt="ico-fb" class="ico-fb" src="https://i.ibb.co/NmxyWjL/ico-fb.png" />
                <img id="auth-google" alt="ico-google" class="ico-google" src="https://i.ibb.co/xgLXQrr/ico-gg.png" />
            </div>

            <div>                
                <input id = "email" type = "email" placeholder = "Correo">
                <input id = "password" type = "password" placeholder = "Contraseña">
>>>>>>> 291181037d1bb3c5b73ea41bc0eb8da489b5e803
                <button type = "button" id = "btn-crear"> Registrate </button>
            </div>            
           
            <div>            
                <label>¿Ya tienes una cuenta en Traveller?<label>
                <button type = "button" id = "btn-back-login">Inicia sesión</button>
            </div>
    </div>
    `;
    // const form = document.createElement('form');
    // form.setAttribute('id', 'login');
    form.innerHTML = contenidoForm;
    // El querySelector hace en este caso la función del "document.getElementById"
    const btnAcceder = form.querySelector('#btn-crear');
    btnAcceder.addEventListener('click', signInOnSubmitCreate);

    const btnBackLogin = form.querySelector('#btn-back-login');
    btnBackLogin.addEventListener('click', () => {
        changeHash  ('/login')
      });

    const btnGoogle = form.querySelector('#auth-google');
    btnGoogle.addEventListener('click', signInOnSubmitGoogle);
    
    const btnFacebook = form.querySelector('#auth-fb');
    btnFacebook.addEventListener('click', signInOnSubmitFacebook);

    return form;
}