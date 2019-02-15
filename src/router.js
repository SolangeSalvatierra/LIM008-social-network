import Login from './templates/login.js';
import Create from './templates/createAccount.js';
import {post} from './templates/post.js';
import { getPosts } from './controller/controller-firebase.js';

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
      const user = firebase.auth().currentUser;
      if(user){
        console.log("prueba de hash")
        getPosts((posts) => {
        root.innerHTML = '';        
        root.appendChild(post(posts));  
      })
      } else {
        root.appendChild(Login());
      }   
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
