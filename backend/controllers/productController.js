const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");



// create product --- Admin
exports.createProduct = catchAsyncErrors(async (req,res,next)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    });
});

// get All product
exports.getAllProducts =  catchAsyncErrors(async (req,res)=>{

    const resultPerPage = 4;
    const productsCount = await Product.countDocuments();  

    const apiFeature = new ApiFeatures(Product.find(),req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
    const products = await apiFeature.query; //now here query is equal to Product.find()

    res.status(200).json({
        success:true,
        products,
        productsCount,
    });
});

// get Single product
exports.getProductDetails =  catchAsyncErrors(async (req,res,next)=>{
    const product = await Product.findById(req.params.id);
    
    // if(!product){
    //     return res.status(500).json({
    //         success:false,
    //         message:"Product not found"
    //     })
    // }
    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }

    res.status(200).json({
        success:true,
        product
    });
});

// update product -- Admin
exports.updateProduct =  catchAsyncErrors(async (req,res, next)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }

    product =  await Product.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    });
    res.status(200).json({
        success:true,
        product
    });
});

// Delete Product

exports.deleteProduct =  catchAsyncErrors(async (req,res, next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }

    await product.deleteOne();
    res.status(200).json({
        success:true,
        product:"Product deleted successfully"
    });
});