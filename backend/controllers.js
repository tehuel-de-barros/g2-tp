import mongoose from 'mongoose';
import Prod from './models/Prod.js'



/* const createProd = (req, res) => {
  console.log('POST');
  console.log(req.body);
  let prod = new Prod;
  prod.name = req.body.name;
  prod.price = req.body.price;
  prod.img = req.body.img;
  prod.description = req.body.description;

  prod.save((err, prodSave) => {
    if(err) res.status(500).send({msg: 'Error al guardar: ' + err})
    res.status(201).json(prodSave);
  })
} */

const createProd = (req, res) => {
  const { img, name, description, price } = req.body;
  console.log(req.body);
  const prod = new Prod({ img, name, description, price });
  console.log(prod);
  prod.save((err, prod) => {
    if(err) console.log('hay error');
    res.status(201).json(prod);
  });
};


/* const updateProd = (req, res) => {
  const id = req.params.id;
  const { price, name, img, description } = req.body;
  const prod = { price, name, img, description };
  Prod.findByIdAndUpdate(id, prod, (err, prod) => {
    res.status(200).json(prod);
  });
}; */



const updateProd = (req, res) => {
  let { id:prodId } = req.params; 
  let update = req.body; 

  Prod.findByIdAndUpdate(prodId,update)
    .then(prodUpdate => {
      console.log(prodUpdate);
      res.status(200).json({msg:prodUpdate});
  })
    .catch(error => console.error(error))

}


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