import axios from "axios";
import { useState, useEffect } from "react";

/* axios.post('localhost:8000/api/Prod')
    .then(res => console.log(res.data)) */

const App = () => {
  const [prod, setProd] = useState([]);
  useEffect(() => { 
    axios.get('http://localhost:8000/api/Prod')
      .then(res => {
        setProd(res.data);
        console.log(prod);
      })
  }, [])

  

  return (
    <div className="prod">
      {prod.map(prod => { 
        return (
          <div className="" key={prod._id}>
            <div className="">
              <img className="" src={prod.img}></img>
              <p className="">{prod.name}</p>
              <h2>{prod.price}</h2>
            </div>
          </div>
         );
      })}
    </div>
  );
}

export default App;
