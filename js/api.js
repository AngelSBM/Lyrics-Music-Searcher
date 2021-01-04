import * as UI from './interfaz.js';


class API {

    constructor( artista, cancion ){
        this.artista = artista;
        this.cancion = cancion;
    }


    consultarAPI(){
        
        const url = `https://api.lyrics.ovh/v1/${ this.artista }/${ this.cancion }`;

        fetch( url )
                .then( data => data.json() )
                .then( resp => {
                   
                    if ( resp.lyrics ) {
                        UI.divResultado.textContent = resp.lyrics;                        
                    } else {
                        UI.divResultado.textContent = 'Ups! Al parecer tu término de búsqueda es incorrecto o la canción no existe.'; 

                        setTimeout(() => {
                            UI.divResultado.textContent = '';
                        }, 3000);
                    }

                } )

    }

}

export default API