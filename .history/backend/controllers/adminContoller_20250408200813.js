const admin=require("../models/adminModel");

exports.addAdmin =async (re,req) =>{
    try{
        await admin.addAdmin(res.body);
        res.status(201).json({message:"Admin Added Sucessfully"});

    } catch(error){
        console.error(error);
        res.status(500).json({error})
    }
}