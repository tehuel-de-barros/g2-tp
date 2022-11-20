import Prod from './models/Prod.js'

const createProd = (req, res) => {
  const { price, name, img, description } = req.body;
  const prod = new Prod({ price, name, img, description });
  prod.save((err, prod) => {
    res.status(201).json(prod);
  });
};

const updateProd = (req, res) => {
  const id = req.params.id;
  const { price, name, img, description } = req.body;
  const prod = { price, name, img, description };
  Prod.findByIdAndUpdate(id, prod, (err, prod) => {
    res.status(200).json(prod);
  });
};

const deleteProd = (req, res) => {
  Prod.findByIdAndDelete(req.params.id, err => {
    const msg = { text: 'borraste el producto del catalogo' };
    res.status(200).json(msg);
  });
};

const getAllProd = (req, res) => {
  Prod.find((err, prod) => {
    res.status(200).json(prod);
  });
};


  

const controller = { 
  createProd,
  updateProd,
  deleteProd, 
  getAllProd
  }

  export default controller;