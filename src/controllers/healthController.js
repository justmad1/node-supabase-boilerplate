const supabase = require('../auth/supabaseClient');

exports.healthCheck = async (req, res) => {
    try {
        const { error } = await supabase.auth.getSession();

        if (error) {
            return res.status(500).json({
                status: 'fail',
                message: 'Supabase reachable but test call failed',
                error: error.message
            });
        }

        res.status(200).json({
            status: 'ok',
            message: 'Supabase connection healthy'
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Supabase connection test failed',
            error: err.message
        });
    }
};