import {UserWithEmail} from '../contoller-firebase.js'
export default () => {
  const divElement = document.createElement('div');
  const viewRegister = ` 
    <div>
      <form>
        <div>
            <h1>Registrate</h1>
        </div>
        <div>
          <input id="name" placeholder="nombre" type ="text">
        </div>
        <div>
          <input id="email" placeholder="correo electrónico" type = "email">
        </div>
        <div>
          <input id="password" placeholder="contraseña" type="password">
        </div>
        <div>
          <input id="password" placeholder="confirmar contraseña" type="password">
        </div>
        <div>
          <button id="btn1">Registrar</button>
        </div>
        <div class="links">
          <p class="singup-text">¿Ya tienes una cuenta?&nbsp;<a class="link register" href="#/"><span id="" class="link register-href">Iniciar Sesión</span></a></p>
        </div>
      </form>
    </div>
  `;
  divElement.className ='register';
  divElement.innerHTML=viewRegister;
  
  const btn1=divElement.querySelector('#btn1');
  btn1.addEventListener('click',()=>{
    const email = divElement.querySelector('#email').value;
    const password = divElement.querySelector('#password').value;
    UserWithEmail(email,password);
  });
  return divElement;
};