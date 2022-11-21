import { useState } from 'react';
import axios from 'axios'; 


    
const Form = () => { 
    const [prod, setProd] = useState({
        name: '',
        price: '',
        img: '',
        description: ''
    });
/* 
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('localhost:8000/api/Prod', prod)
    }

    axios.get('localhost:8000/api/Prod')
        .then(({data})) */
    return(
        <form /* onSubmit={handleSubmit} */>       
            <div className="formulario">
                <h4>Crear Producto</h4>
                <input className="info" /* onChange={} */>   </input>
                <input className="info" required type="" name="" id="" placeholder="Precio"></input>
                <input className="info" required type="" name="" id="" placeholder="Ingrese imagenes"></input>
                <input className="info" required type="" name="" id="" placeholder="Ingrese la descripcion del producto"></input>
                <input className="botons" required type="submit" value="Crear"></input>
            </div>
        </form>
    );
}

export default Form;