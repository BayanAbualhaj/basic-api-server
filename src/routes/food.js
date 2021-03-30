'use strict';

const express=require('express');
const Food=require('../models/food');
const validator = require('../middleware/validator');
const food=new Food();
const router=express.Router();



const getfood=(req,res)=>{
    const resObj = food.read();
    res.json(resObj);
}

const createfood=(req, res)=>{
    const foodObject = req.body;
    const resObj = food.create(foodObject);
    res.status(200).json(resObj);
}

const getfoodById=(req,res)=>{
    const resObj = food.read(req.params.id);
    res.json(resObj);
}

const updatefood=(req, res)=>{
    const foodObject = req.body;
    const resObj = food.update(req.params.id, foodObject);
    res.json(resObj);
}

const  deletefood=(req, res)=>{
    const resObj = food.delete(req.params.id);
    res.json(resObj);
}

router.get('/', getfood);
router.post('/', createfood);
router.get('/:id',validator ,getfoodById);
router.put('/:id', validator ,updatefood);
router.delete('/:id', validator ,deletefood);

module.exports=router;