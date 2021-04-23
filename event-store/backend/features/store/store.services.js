import formidable from "formidable";
import fs from "fs";
import Products from "./product.model";
import errorHandler from "./../../core/db_error";

const addProduct = (req, res, next) => {
  
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        message: "Image could not be uploaded",
      });
    }
    let product = new Products(fields);
    if (files.image) {
      product.image.data = fs.readFileSync(files.image.path);
      product.image.contentType = files.image.type;
    }
    try {
      let result = await product.save();
      res.json(result);
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  });
};

const list = async (req, res)  => {
  const query = {}
  if(req.query.search)
    query.name = {'$regex': req.query.search, '$options': "i"}
  if(req.query.category && req.query.category != 'All')
    query.category =  req.query.category
  try {
    let products = await Products.find(query).exec()
    res.json(products)
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
};

const read = (req, res) => {
  req.product.image = undefined
  return res.json(req.product)
}


const productByID = async (req, res, next, id) => {
  

  try {
    let product = await Products.findById(id).exec()
    if (!product)
      return res.status('400').json({
        error: "Product not found"
      })
    req.product = product
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve product"
    })
  }
}
 const getPhoto = (req, res, next) => {
  if(req.product.image.data){
    res.set("Content-Type", req.product.image.contentType)
    return res.send(req.product.image.data)
  }
  next()
}



export default {
  addProduct,
  list,
  productByID ,
  getPhoto ,
  read
};
