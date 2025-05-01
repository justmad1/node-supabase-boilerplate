const express = require('express');
const morgan = require('morgan');
const logger = require('./config/logger');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const healthRoutes = require('./routes/healthRoutes');
const testSupabaseConnection = require('./tests/supabaseConnectionTest');

const app = express();

require('dotenv').config();
app.use(express.json());

app.use(morgan('combined', {
    stream: { write: msg => logger.info(msg.trim()) }
}));

(async () => {
    await testSupabaseConnection();
})();

app.use('/', healthRoutes);
app.use('/', authRoutes);
app.use('/', protectedRoutes);

module.exports = app;