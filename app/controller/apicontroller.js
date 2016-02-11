var user = require('../../app/model/user');

module.exports = function(app)
{
    app.get('/setup',function(req,res){
        var nick = new user({
            name:'nguyen quoc huan',
            password:'123',
            admin: true
        });
        
        nick.save(function(err){
            if(err) throw err;
            console.log('save successfully');
            res.json({success:true});
            });
    });

    app.get('/api',function(req,res)
    {
        user.find({}, function(err, users) {
        res.json(users);
        });
    });

}