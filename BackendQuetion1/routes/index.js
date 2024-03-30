const express = require("express");

const router = express.Router();

router.get("/:companyname/categories/:cotegoryname/product"),async(req,res)=>{
    try {
        return res.status(200).json({msg:"Succeddfull"});
    } catch (error) {
        return res.status(500).json({err:error.message});
    }
}

module.exports = router;