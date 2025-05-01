const jwt = require('jsonwebtoken');
const jwksRsa = require('jwks-rsa');
require('dotenv').config();

const client = jwksRsa({
    jwksUri: `${process.env.SUPABASE_URL}/auth/v1/keys`,
});

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Missing or invalid Authorization header' });
    }

    const token = authHeader.split(' ')[1];

    const getKey = (header, callback) => {
        client.getSigningKey(header.kid, (err, key) => {
            if (err) return callback(err);
            const signingKey = key.getPublicKey();
            callback(null, signingKey);
        });
    };

    jwt.verify(token, getKey, { algorithms: ['RS256'] }, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid or expired token' });
        }
        req.user = decoded;
        next();
    });
};

module.exports = authenticateJWT;