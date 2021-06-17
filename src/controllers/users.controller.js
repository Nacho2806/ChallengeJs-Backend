const usersCtrl = {}
const User = require('../models/User');

const bcrypt = require('bcrypt')
const rounds = 10

const jwt = require('jsonwebtoken')
const tokenSecret = "my-token-secret"

usersCtrl.loginUser = (req, res) =>{
    User.findOne({email: req.body.email})
    .then(user => {
        if(!user) res.status(404).json({error: 'No user with that email found'})
        else {
            bcrypt.compare(req.body.password, user.password, (error, match) => {
                if (error) res.status(500).json(error)
                else if (match) res.status(200).json({token: generateToken(user)})
                else res.status(403).json({error: 'Passwords do not match'})
            })
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
    
};

usersCtrl.createUser = (req, res) =>{
    bcrypt.hash(req.body.password, rounds, (error, hash) => {
        if (error) res.status(500).json(error)
        else {
            const newUser =  User({email: req.body.email, password: hash})
            newUser.save()
                .then(user => {
                    res.status(200).json({token: generateToken(user)})
                })
                .catch(error => {
                    res.status(500).json(error)
                })
        }
    })
};

usersCtrl.getUsers = async (req, res) =>{
    const users = await User.find();
    res.json(users);
}

function generateToken(user){
    return jwt.sign({data: user}, tokenSecret, {expiresIn: '48h'})
}


module.exports = usersCtrl;
