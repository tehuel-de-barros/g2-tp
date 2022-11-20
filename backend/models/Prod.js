import mongoose  from "mongoose";
// los modelos se crean a partir de un schema
const ProdSchema = new mongoose.Schema({
  id: Number,
  price: Number,
  name: String,
  img:String,
  description: String
});
// el schema describe la pinta de un documento de la coleccion

// creamos el modelo llamando a mongoose.model(nombre, schema)
const Prod = mongoose.model('Prod', ProdSchema);

// hay que exportar el modelo para usarlo despues en otros archivos
export default Prod;
