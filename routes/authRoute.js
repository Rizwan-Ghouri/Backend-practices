import express from 'express';

const authRoute = express.Router();

authRoute.get('/forgot-password', (req, res) => {
    res.send('Forgot Password Route is working');
})

export default authRoute;