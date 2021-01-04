import * as UI from './interfaz.js';
import API from './api.js';

UI.formulario.addEventListener('submit', buscarCancion);


function buscarCancion(e){
    e.preventDefault();

    //Leer datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if( artista === '' || cancion === '' ){
        //El usuario dejó al menos un campo vacío

        UI.divMensajes.classList.add('text-white', 'bg-danger', 'rounded', 'text-center', 'p-3');
        UI.divMensajes.textContent = 'Error... Todos los campos son obligatorios!';

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('text-white', 'bg-danger', 'rounded', 'text-center', 'p-3');
        }, 3000);

        return;
    }


    //Consultar API

    const busqueda = new API( artista, cancion );
    busqueda.consultarAPI();

}