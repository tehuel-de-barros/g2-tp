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
    <div>
      {prod.map(prod => { 
      return (
      <div key={prod._id}>
        <p className="hola">{prod.name}</p>
      </div>
    );
  })}
    </div>
  );
}

export default App;
