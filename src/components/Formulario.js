import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({ agregarNuevoGasto }) => {

    const [nombre, guardarNombre ] = useState('');
    const [cantidad, guardarCantidad] = useState('');
    const [error, guardarError] = useState(false);

    //Cuando el usuario agrega un gasto

    const agregarGastos = e => {
        e.preventDefault();

        //Validar 

        if (cantidad < 1 || isNaN(cantidad) || nombre.trim()==='') {            
            guardarError(true);
            return;
        }

        //Construir el gasto
        const gasto = {
            nombre, 
            cantidad,
            id: shortid.generate()
        } 
        

        //Pasar el gasto al componente principal
        agregarNuevoGasto(gasto);


        //Resetar el form
        guardarNombre('');
        guardarCantidad(0);

    }

    return ( 

        <form
            onSubmit = {agregarGastos}
        >
            <h2>Agrega tus gastos aquí</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto"/> :null }

            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange= {e => guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>

     );
}
 
export default Formulario;