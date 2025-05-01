const supabase = require('../auth/supabaseClient');
const logger = require('../config/logger');

const testSupabaseConnection = async () => {
    try {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
            logger.warn(`Supabase reachable, but test call failed: ${error.message}`);
        } else {
            logger.info('Supabase client initialized and reachable (test session fetched)', { data });
        }
    } catch (err) {
        logger.error('Supabase connection test failed: ' + err.message);
    }
};

module.exports = testSupabaseConnection;