
import express from 'express'
import storeService from './store.services'

/*
store/:userId -> post request to add a product

*/
const router = express.Router();

//Todo : verify user is login and user role == admin]
//add product
router.route('/api/store/:userId').post(storeService.addProduct);

//get a single product 
router.route('/api/store/:productId').get(storeService.read);

//returns list of products. optional query ?category=productCategory & search= search word (name)
router.route('/api/store').get(storeService.list);


//get product image 
router.route('/api/store/images/:productId').get(storeService.getPhoto);
router.param('productId', storeService.productByID)

export default router