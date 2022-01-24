import express from "express";

export const router = express.Router();
router.get('/free', (req, res) => {
	res.json({type: 'free'})
})


