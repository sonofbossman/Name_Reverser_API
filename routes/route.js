import express from 'express'
export const router = express.Router();

import { home, reversedName, submitName } from '../controllers/controller.js'

router.route('/').get(home)
router.route('/reverse-name').get(reversedName).post(submitName)