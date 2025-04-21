const admin=require("../models/adminModel");

exports.addAdmin =async (re,req) =>{
    try{
        await admin.addAdmin(res.body);
        res.status(201).json({message:"Admin Added Sucessfully"});

    } catch(error){
        console.error(error);
        res.status(500).json({error:"Error adding Admin"});
    }
};

exports.updateAdmin =async (re,req) =>{
    try{
        await admin.updateAdmin(res.body);
        res.status(201).json({message:"Admin Updated Sucessfully"});

    } catch(error){
        console.error(error);
        res.status(500).json({error:"Error updating Admin"});
    }
};

//get vehicle by ID
exports.getAdminById = async (req,res) =>{
    try{
        const [rows] =await admin.getAdminById(req.params.id);
        if(rows.length === 0) return res.status(404).json({error:"Admin not found"});
        res.status(200).json(rows[0]);
    }catch(error){
        console.error(error);
        res.status(500).json({error:"Error  fetching Admin"});

    }
};

exports.deleteAdmin =async (re,req) =>{
    try{
        await admin.deleteAdmin(res.body);
        res.status(201).json({message:"Admin Updated Sucessfully"});

    } catch(error){
        console.error(error);
        res.status(500).json({error:"Error updating Admin"});
    }
};
