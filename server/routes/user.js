const express=require('express');
const { route } = require('express/lib/application');
const router=express.Router();
const customercontroller=require('../controllers/customercontroller');



router.get('/',customercontroller.view);
router.post('/',customercontroller.find);
router.get('/:id',customercontroller.delete);
router.get('/adduser',customercontroller.form);

router.get('/edituser/:id',customercontroller.edit);
router.post('/edituser/:id',customercontroller.update);
router.get('/viewuser/:id',customercontroller.viewall);



module.exports=router;