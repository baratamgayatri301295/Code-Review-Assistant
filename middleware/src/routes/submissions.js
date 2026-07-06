const express = require('express');
const axios = require('axios');

const router = express.Router();

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8080';

// Create Submission
router.post('/', async (req, res, next) => {
    try {
        const { userId, title, codeContent, language, description } = req.body;

        if (!userId || !title || !codeContent || !language) {
            return res.status(400).json({
                error: 'Missing required fields'
            });
        }

        if (codeContent.length > 50000) {
            return res.status(400).json({
                error: 'Code content exceeds limit'
            });
        }

        const response = await axios.post(
            `${BACKEND_URL}/submissions`,
            {
                userId,
                title,
                codeContent,
                language,
                description
            }
        );

        res.status(201).json({
            success: true,
            data: response.data,
            message: 'Submission created successfully'
        });

    } catch (error) {
        next(error);
    }
});

// Get Submission
router.get('/:submissionId', async (req, res, next) => {

    try {

        const response = await axios.get(
            `${BACKEND_URL}/submissions/${req.params.submissionId}`
        );

        res.json({
            success: true,
            data: response.data
        });

    } catch (error) {
        next(error);
    }

});

// Get User Submissions
router.get('/user/:userId', async (req, res, next) => {

    try {

        const response = await axios.get(
            `${BACKEND_URL}/submissions/user/${req.params.userId}`
        );

        res.json({
            success: true,
            count: response.data.length,
            data: response.data
        });

    } catch (error) {
        next(error);
    }

});

module.exports = router;