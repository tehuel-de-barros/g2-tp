import { Component, useState } from 'react';
import axios from 'axios'; 


    
const Form = ({setter}) => { 
    const [prod, setProd] = useState({
        name: '',
        price: '',
        img: '',
        description: ''
    });

const handleSubmit = (e) => { 
    e.preventDefault();
    const fromData = Object.fromEntries(new FormData(e.target)); 
    console.log(fromData);

    axios.post('http://localhost:8000/api/Prod', fromData)
    .then(res =>setter(e => [...e, res.data]))
  
}



    return(
        <form onSubmit={handleSubmit}>
            <div className="formulario">
                <h4>Crear Producto</h4>
                <input className="info" type="text" name="name" id="name"  placeholder="Nombre del producto"></input>
                <input className="info" type="number" name="price" id="precio" placeholder="Precio"></input>
                <input className="info" type="" name="img" id="img" placeholder="URL de la imagen"></input>
                <input className="info" type="" name="description" id="description" placeholder="Ingrese la descripcion del producto"></input>
                <input className="botons" type="submit" value="Crear"></input>
            </div>
        </form>
    );
}

export default Form;