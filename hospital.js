const express = require('express');
const router = express.Router();
router.use(express.json());


const hospitalModel = require("../models/hospitalModel");

router.get('/', (req, res) => res.send('Welcom to Hospital!!'))

router.get('/hospitalList', async (req,res)=>{
    const hospiList = await hospitalModel.find();

    if(hospiList.length === 0){
        return res.json({ data: "Hospital data not found"});
    }

    return res.json({ data: hospiList});
}); 

router.post('/addHospital', async(req,res)=>{
    const { newhospital } = req.body;
    const add = hospitalModel.create(newhospital);
    if(add.length===0){
        return res.json({ data: "Data not Added Sucefully" });        
    }
    return res.json({ data: "Data Added Sucefully" });
});

router.delete("/deleteHospital/:hname", async(req,res)=>{
    const deleteHospi = await hospitalModel.findOneAndDelete({ 
        hospname: req.params.hname, 
    });
    return res.json({ data: "data deleted Sucefully" });
});

router.put("/update/:hospid", async (req,res)=>{
    const hid = req.params.hospid;
    const hname = req.body.hospname;
    const haddr = req.body.hospaddress;
    const bed = req.body.hospbed;

    const updateHospital = await hospitalModel.findOneAndUpdate(
        { hospid: hid },
        { hospname: hname , hospaddress: haddr , hospbed: bed },
        {new: true}
    );

    return res.json({data: "Data Updated"});
});

module.exports=router;
