const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const submissionRoutes = require('./routes/submissions');
const reviewRoutes = require('./routes/reviews');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Health Check
app.get('/health', (req, res) => {
    res.json({
        status: 'Middleware is running',
        timestamp: new Date()
    });
});

// Routes
app.use('/submissions', submissionRoutes);
app.use('/reviews', reviewRoutes);

// Error Handler
app.use(errorHandler);

// 404
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found',
        path: req.path
    });
});

app.listen(PORT, () => {
    console.log(`✅ Middleware running on http://localhost:${PORT}`);
});