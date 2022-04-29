var express = require('express');

var router = express.Router();
const user = {
    email: 'admin@gmail.com',
    password: 'admin'
};
//login user
router.post('/login', function (req, res) {
    
    if (req.body.email === user.email && req.body.password === user.password) {
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
        
    } else {
         res.redirect('/');
        
    }
});

// route for dashboard
router.get('/dashboard', function (req, res) {
    if (req.session.user) {
        res.render('dashboard', {
            title: 'Dashboard',
            user: req.session.user
        });
    } else {
        res.redirect('/');
    }
});



// logout user
router.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/');
}
);

module.exports = router;
