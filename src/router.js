import Login from './templates/login.js';
import Create from './templates/createAccount.js';
import Post from './templates/post.js';
import { getNotes } from './controller/controller-firebase.js';

const changeTmp = (hash) => {
  console.log('dentro de changetnp', hash)
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/login');
  } else if (hash === '#/login' || hash === '#/post' || hash === '#/create') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/login');
  }
}

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const root = document.getElementById('root');
  root.innerHTML = '';
  switch (router) {
    
    case 'login':
      root.appendChild(Login());
      break;
      case 'create':
      root.appendChild(Create());
      break;
      case 'post':
    console.log("prueba de hash")
      getNotes((notes) => {
        root.innerHTML = '';        
        root.appendChild(Post(notes));  
      })
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
