/**
 * Created by why on 2017/8/15.
 */

const express = require('express');
const router = express.Router();
const indexController = require(process.cwd()+'/api/controller/indexController');

router.get('/',indexController.index);

module.exports = router;
