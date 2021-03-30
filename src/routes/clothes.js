'use strict';

const express=require('express');
const Clothes=require('../models/clothes');
const validator = require('../middleware/validator');
const clothes=new Clothes();
const router=express.Router();



const getClothes=(req,res)=>{
    const resObj = clothes.read();
    res.json(resObj);
}

const createClothes=(req, res)=>{
    // console.log(req);
    const clothesObject = req.body;
    // console.log(clothesObject);
    const resObj = clothes.create(clothesObject);
    // console.log(resObj);
    res.status(200).json(resObj);
}

const getClothesById=(req,res)=>{
    const resObj = clothes.read(req.params.id);
    res.json(resObj);
}

const updateClothes=(req, res)=>{
    const clothesObject = req.body;
    const resObj = clothes.update(req.params.id, clothesObject);
    res.json(resObj);
}

const  deleteClothes=(req, res)=>{
    const resObj = clothes.delete(req.params.id);
    res.json(resObj);
}

router.get('/', getClothes);
router.post('/', createClothes);
router.get('/:id',validator ,getClothesById);
router.put('/:id', validator ,updateClothes);
router.delete('/:id', validator ,deleteClothes);

module.exports=router;