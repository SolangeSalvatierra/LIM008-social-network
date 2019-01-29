// Este es el punto de entrada de tu aplicacion

/*import { registrar } from './lib/index.js';
import { acceder } from './lib/index.js';
import { observador } from './lib/index.js';
import { aparecer} from './lib/index.js';
import { cerrar } from './lib/index.js';
import { verificar } from './lib/index.js';*/
import {x} from './lib/index.js';

const prueba = () =>{
    x();
    //registrar();
}

const prueba2 = () =>{
    console.log('probando2')
    //acceder();
}
/*observador();
aparecer();
cerrar();
verificar();*/


const btnRegistrar = document.getElementById('btn-registrar');
const btnAcceder = document.getElementById('btn-acceder');

btnRegistrar.addEventListener('click', prueba);
btnAcceder.addEventListener('click', prueba2);