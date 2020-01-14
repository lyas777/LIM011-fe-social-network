export default () => {
const divElement = document.createElement('div');
const viewHome = `
        <div>
            <h1>Bienvenido</h1>
        </div>
        <div>
            <img id="userImagen"/>
        </div>
        <div>
            <p id="userName"></p>
        </div>
        <div>
            <p id="userEmail"></p>
        </div>
        `; 
    divElement.className = "home";
    divElement.innerHTML=viewHome;
    return divElement;
};