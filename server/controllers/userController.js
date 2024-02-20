const User = require('../models/userSchema');

const signIn = async (req, res) => {
    try {
        let {email , password} = req.body;
        const user = await User.findOne({email});

        if (!user || user.password !== password) {
            return res.status(401).json({message : 'Authentication Failed!'})
        }
         res.status(200).json({message : 'Authentication Successful!' , user})
        
    } catch (error) {
        res.status(500).json({message : 'Failed to authenticate'})
    }

}

const signUp = async (req, res) => {
    try {
        let {name , email , password} = req.body;
        const existingUser = await User.findOne({email});
        
        if (existingUser) {
            return res.status(409).json({message : 'User with this email already exists'})
        }

        const newUser = new User({name, email, password})
        await newUser.save();

        res.status(201).json({message : 'User Created Successfully!', newUser})
    } catch (error) {
        console.error('Failed to create user', error);
        res.status(500).json({ message: 'Failed to create user' });
    }
    
}

module.exports = {signIn, signUp};