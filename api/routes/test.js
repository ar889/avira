const router = require("express").Router();

router.get('/test',(req,res)=>{
    res.send('test route is successfull')
})




module.exports = router;
