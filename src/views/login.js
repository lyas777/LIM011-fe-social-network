export default () => {
    const divElement = document.createElement('div');
    const viewSingIn = ` 
      <div>
        <form>
          <div>
              <h1>Inicia Sesión</h1>
          </div>
          <div>
            <input id="email" placeholder="correo electrónico" type="email">
          </div>
          <div>
            <input id="password" placeholder="contraseña" type="password">
          </div>
          <button id="btn1">Registrar</button>
          </div>
          <div class="links">
            <p class="other-singup-text"> O Ingresa con:</p>
            <p> 
                <a class="link-icon" href="#" rel="noopener"><img class="other-icon" src="../src/img/facebookicon.svg" /></a>
                <a class="link-icon" href="#" rel="noopener"><img class="other-icon" src="../src/img/gmail.svg" /></a>
            </p>
            <p class="singup-text"> 
                <a class="link forgot" href="#" rel="noopener">¿Olvidaste tu contraseña?</a>
            </p>
            <p class="singup-text p"><span class="new">¿Eres Nuevo?</span>
                <a class="link register" href="#/register" id="login-signup-link"> Regístrate Ahora</a>
            </p>
          </div>
        </form>
      </div>
    `;
    divElement.className='singIn';
    divElement.innerHTML=viewSingIn;
    return divElement;
};