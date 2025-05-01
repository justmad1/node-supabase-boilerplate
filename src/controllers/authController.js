const supabase = require('../auth/supabaseClient');

exports.register = async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) return res.status(400).json({ error: error.message });
    res.status(200).json({ message: 'Registration successful', data });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) return res.status(401).json({ error: error.message });
    res.status(200).json({
        message: 'Login successful',
        access_token: data.session.access_token,
        user: data.user
    });
};