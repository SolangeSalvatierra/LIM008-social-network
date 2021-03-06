import {signInOnSubmitCreate, signInOnSubmitGoogle, signInOnSubmitFacebook, changeHash} from "../view-controller.js";

export  default () => {
    const form = document.createElement('form');
    const  contenidoForm  =  `

    <div class="conteiner2">
    <img alt='logo-traveller' src="ima/traveller.1.png" class="img-logo">
    <h2> Registro de usuarios </h2>

    <div>
        <label> con:</label>

        <div>
            <img id="auth-fb" alt="ico-fb" class="ico-fb" src="https://i.ibb.co/NmxyWjL/ico-fb.png" />
            <img id="auth-google" alt="ico-google" class="ico-google" src="https://i.ibb.co/xgLXQrr/ico-gg.png" />
        </div>

    </div>

    <label> ó </label>

    <div>
        <input class="text-field" id="email" type="email" placeholder="Correo">
        <input class="text-field" id="password" type="password" placeholder="Contraseña">
        <button type="button" id="btn-crear"> Regístrate </button>
    </div>

    <div>
        <label>¿Ya tienes una cuenta?</label>
        <button type="button" id="btn-back-login">Inicia sesión</button>
    </div>
</div>
    `;
    form.innerHTML = contenidoForm;
    
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