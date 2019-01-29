// Este es el punto de entrada de tu aplicacion

import { registrar } from './lib/index.js';
import { acceder } from './lib/index.js';
import { observador } from './lib/index.js';
import { aparecer} from './lib/index.js';
import { cerrar } from './lib/index.js';
import { verificar } from './lib/index.js';



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
