import express from 'express';
const router = express.Router()
import * as HomeController from '../../controllers/homeController';

router.get('/', HomeController.renderHome);

export default router;
