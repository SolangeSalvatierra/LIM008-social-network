import Login from './templates/login.js';
import { getNotes } from './controller/controller-firebase.js';
import muro from './templates/muro';

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/signIn');
  } else if (hash === '#/signIn' || hash === '#/muro') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/signIn');
  }
}

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const root = document.getElementById('root');
  root.innerHTML = '';
  switch (router) {
    case 'muro':
    console.log("prueba de hash")
      getNotes((notes) => {
        root.innerHTML = '';        
        root.appendChild(muro(notes));  
      })
      break;
    case 'signIn':
      root.appendChild(Login());
      break;
    default:
      root.appendChild(Login());
      break;
  }
}

export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash))
  if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
}
