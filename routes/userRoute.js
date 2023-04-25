import express from 'express';
const router = express.Router();
import {allUsers,createUser} from "./../controllers/userController.js"

//router.get('/',allUsers)
router.get('/',createUser)


export default router;