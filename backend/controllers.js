import Prod from './models/Prod.js'

const createProd = (req, res) => {
    const { price, name, img, description } = req.body;
    const prod = new Prod({ price, name, img, description });
    prod.save((err, prod) => {
      res.status(201).json(prod);
    });
  };

  

  const controller = { 
    createProd
  }

  export default controller;