import exp from 'express';

export const Productapp=exp.Router();



//Product APIs
let products=[];    
//get products
Productapp.get('/products',(req,res)=>{
    res.status(200).json({message:"all products",payload:products})
});
//get product by id
Productapp.get('/products/:id',(req,res)=>{})
    let product=products.find(productObj=>productObj.id===Number(req.params.id))
//create product        
Productapp.post('/products',(req,res)=>{
    let newProduct=req.body
    products.push(newProduct)
    res.status(201).json({message:"product created"})
});
//update product
Productapp.put('/products/:id',(req,res)=>{
    let modifiedProduct=req.body
    let productIndex=products.findIndex(productObj=>productObj.id===modifiedProduct.id)
    if(productIndex===-1){
        return res.status(404).json({message:"product not found"})
    }
    products.splice(productIndex,1,modifiedProduct)
    res.status(200).json({message:"product modified"})
});
//delete product
Productapp.delete('/products/:id',(req,res)=>{
    let productId=Number(req.params.id)
    let productIndex=products.findIndex(productObj=>productObj.id===productId)
    if(productIndex===-1){
        return res.status(404).json({message:"product not found"})
    }       
    products.splice(productIndex,1)
    res.status(200).json({message:"product deleted"})
});