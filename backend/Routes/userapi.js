const express = require('express')
const router = express.Router()


const User = require('../models/user')
const bcrypt = require('bcrypt')
router.post('/adduser', async (req, res) => {
    try {
        const newUser = new User({
            user_name: req.body.user_name,
            user_email: req.body.user_email,
            password: await bcrypt.hash(req.body.password, 20),
            phone_Number: req.body.phone_Number,
            Year_of_experience: req.body.Year_of_experience,
            physical_shop_address:req.body.physical_shop_address,
            // user_dob: req.body.user_dob,
            // gender: req.body.gender,
        })
        const saveUser = await newUser.save()
        res.json(saveUser)
    } catch (error) {
        res.status(500).json({ 'error': error })
    }
})
module.exports = router;