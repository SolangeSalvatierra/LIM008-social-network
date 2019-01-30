// Este es el punto de entrada de tu aplicacion

import { registrar } from './lib/index.js';
import { acceder } from './lib/index.js';
import { observador } from './lib/index.js';
import { aparecer} from './lib/index.js';
import { cerrar } from './lib/index.js';
import { verificar } from './lib/index.js';

import { loginGoogle } from './lib/index.js';
const prueba = () => {
  loginGoogle();
}
document.getElementById("btn-google").addEventListener("click", prueba, false);

import { loginFacebook } from './lib/index.js';
const prueba2 = () => {
  loginFacebook();
}
document.getElementById("btn-Facebook").addEventListener("click", prueba2, false);


const btnRegistrar = document.getElementById('btn-registrar');
const btnAcceder = document.getElementById('btn-acceder');

btnRegistrar.addEventListener('click', () => {
    registrar();
});
btnAcceder.addEventListener('click', () => {
    acceder();
    observador();
    verificar();
    aparecer();
});

cerrar();


