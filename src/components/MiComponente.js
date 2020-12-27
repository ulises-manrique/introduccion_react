import React, { Component } from 'react';

class MiComponente extends Component {

    render() {
        let receta = {
            nombre: 'pizza',
            ingredientes: ['tomates', 'queso', 'Jamon de pavo'],
            calorias: 400
        }

        return (
            <div>
                <h1>Hola, soy el componente llamado:  "MiComponente"</h1>
                <h2>Estoy probando el componenete</h2>
                <hr></hr>
                <h3>{receta.nombre}</h3>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
                <p>Calorias: {receta.calorias}</p>
            </div>
        );
    }

}//fin de mi componenete.

export default MiComponente;