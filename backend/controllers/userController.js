const users = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt =require('bcrypt')

exports.register = async (req, res) => {
   
    const {username, email, password } = req.body
    try {
        const existUser = await users.findOne({ email })
        if (existUser) {
            res.status(406).json('user already exit !! please login....')
        } else {
            const handlepassword = await bcrypt.hash(password, 10)
            const newUser = users({
             username,email, password: handlepassword
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(err)
        console.log(err);
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body
   
    try {
     
        const existingUser = await users.findOne({email})
        if (existingUser) {
            const isMatch = await bcrypt.compare(password, existingUser.password);
            if (!isMatch) {
                console.log("Invalid credentials");
                return res.status(401).json({ message: 'Invalid credentials' });
               
            }
            
            const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET)
            res.status(200).json({ token, existingUser })
        } else {
            res.status(406).json("invalid data")
        }
    } catch (err) {
        res.status(401).json(err)
    }
}