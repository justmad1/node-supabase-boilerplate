exports.getProfile = (req, res) => {
    res.status(200).json({
        message: 'This is a protected profile route',
        user: req.user
    });
};