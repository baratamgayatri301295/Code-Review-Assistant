const errorHandler = (error, req, res, next) => {

    console.error('Error:', error.message);

    if (error.response) {
        return res.status(error.response.status).json({
            success: false,
            error: error.response.data
        });
    }

    if (error.code === 'ECONNREFUSED') {
        return res.status(503).json({
            success: false,
            error: 'Cannot connect to Spring Boot backend.'
        });
    }

    res.status(500).json({
        success: false,
        error: error.message
    });

};

module.exports = { errorHandler };