const admin=require("../models/adminModel");

exports.addAdmin = async (req, res) => {

    try{
        const [result] = await admin.addAdmin(req.body);
        res.status(201).json({ message: "Admin Added Successfully", id: result.insertId });

    } catch(error){
        console.error(error);
        res.status(500).json({error:"Error adding Admin"});
    }
};

exports.updateAdmin =async (req,res) =>{
    try{
        await admin.updateAdmin(res.body, req.params.id);
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
        await admin.deleteAdmin(req.params.id);
        res.status(201).json({message:"Admin Deleted Sucessfully"});

    } catch(error){
        console.error(error);
        res.status(500).json({error:"Error deleting Admin"});
    }
};
