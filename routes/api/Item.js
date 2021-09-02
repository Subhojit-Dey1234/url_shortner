const express = require('express')
const router = express.Router()
const Item = require('../../models/Item')

router.get('/:id',(req,res)=>{
    Item.find({shortlink:req.params.id})
    .then(item=>{
        res.json(item)
        return item
    })
})


router.get('/',(req,res)=>{
    Item.find()
    .sort({date: -1})
    .then(items => {
        console.log(items)
        res.json(items)})
})



router.post('/',(req,res)=>{
    const newItem = new Item({
        hostname : req.body.hostname,
        shortlink: req.body.shortlink,
        name: req.body.name
    })

    newItem.save().then(item => res.json({item :item,success:true}));
})


router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then(item=> item.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}))
})

module.exports = router