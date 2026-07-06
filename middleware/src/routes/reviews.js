const express = require('express');
const axios = require('axios');

const router = express.Router();

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8080';

// Analyze Code
router.post('/analyze/:submissionId', async (req, res, next) => {

    try {

        console.log(`Analyzing submission ${req.params.submissionId}`);

        const response = await axios.post(
            `${BACKEND_URL}/reviews/analyze/${req.params.submissionId}`
        );

        res.json({
            success: true,
            data: response.data,
            message: 'Analysis completed'
        });

    } catch (error) {
        next(error);
    }

});

// Get Review
router.get('/:submissionId', async (req, res, next) => {

    try {

        const response = await axios.get(
            `${BACKEND_URL}/reviews/${req.params.submissionId}`
        );

        res.json({
            success: true,
            data: response.data
        });

    } catch (error) {
        next(error);
    }

});

module.exports = router;