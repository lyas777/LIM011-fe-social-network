export default () => {
  const divElement = document.createElement('div');
  const viewRegister = ` 
    <div>
        <div>
            <h1>Registrate</h1>
        </div>
        <div>
          <input id="name" placeholder="nombre">
        </div>
        <div>
          <input id="email" placeholder="correo electrónico">
        </div>
        <div>
          <input id="password" placeholder="contraseña">
        </div>
        <div>
          <input id="password" placeholder="confirmar contraseña">
        </div>
        <button id="btn1">Registrar</button>
    </div>
  `;
  divElement.className ='register';
  divElement.innerHTML=viewRegister;
  return divElement;
};