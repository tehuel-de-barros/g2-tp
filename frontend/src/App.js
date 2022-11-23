import axios from "axios";
import { useState, useEffect } from "react";
import Form from "./Form"

/* axios.post('localhost:8000/api/Prod')
    .then(res => console.log(res.data)) */

const App = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    axios.get('/api/Prod')
      .then(res => {
        setProd(res.data);
        console.log(prod);
      })
  }, [])

const deleteProd = (id) =>{
  axios.delete('/api/Prod/' + id)
  let  newProd = []
  prod.forEach( v => {if(v._id != id)  newProd.push(v)})
  setProd(newProd)
}


  return (
    <div className="prod container">
       <div className="full">
          {prod.map(prod => {
            return (
              <div className="card" key={prod._id}>
                  <img className="imagen-producto" src={prod.img} width="300px" height="180px"></img>
                  <br></br>
                  <h1 className="titulo">{prod.name}</h1>
                  <h3>${prod.price}</h3>
                  <p className="desciption">{prod.description}</p>
                  <div className="botones">
                    <button className="comprar" onClick>Comprar</button>
                    <button className="borrar" onClick={_=>deleteProd(prod._id)}>Borrar</button>
                    <a href="#">
                      <img className="edit" src="https://e7.pngegg.com/pngimages/563/868/png-clipart-computer-icons-pencil-icon-design-material-design-drawing-pencil-angle-pencil.png" width="40"></img>
                    </a>
                   </div>

              </div>
            );
          })}
       </div>
       <div className="chau">
              <Form setter={setProd} />
      </div>

    </div>
  );
}

export default App;
