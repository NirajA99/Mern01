const User = require('../models/userSchema');

const signIn = async (req, res) => {
    try {
        let { password, identifier} = req.body;
        let user;

        
        user = await User.findOne({ email :identifier });
         if (!user) {
            user = await User.findOne({ username : identifier });
        }

        if (!user || user.password !== password) {
            return res.status(401).json({message : 'User not found!'})
        }
         res.status(200).json({message : 'Authentication Successful!' , user})
        
    } catch (error) {
        res.status(500).json({message : 'Failed to authenticate'})
    }

}

const signUp = async (req, res) => {
    try {
        let {name , email , password , gender,username, bloggertype, confirmpassword, number} = req.body;

        
        const existingUser = await User.findOne({email});
        
        if (existingUser) {
            return res.status(409).json({message : 'User with this email already exists'})
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({ message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character' });
        }
        const usernameRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,}$/;
        if (!usernameRegex.test(username)) {
            return res.status(400).json({ message: 'Username must contain at least one number, one letter, and one symbol and be at least 8 characters long' });
        }
        if (password !== confirmpassword) {
            return res.status(400).json({ message: 'Password and confirm password do not match' });
        }

        const newUser = new User({name, email, password , username ,gender ,bloggertype ,number})
        await newUser.save();

        res.status(201).json({message : 'User Created Successfully!', newUser})
    } catch (error) {
        console.error('Failed to create user', error);
        res.status(500).json({ message: 'Failed to create user' });
    }
    
}

module.exports = {signIn, signUp};