import User from "../models/user.js"

async function userExist(req, res, next) {
    const existingEmail = await User.findOne({ email: req.body.email });
    if (existingEmail) {
        return res.status(400).json({
            status: false,
            message: "User already exists"
        })
    }

    const existingPhone = await User.findOne({ phone: req.body.phone });

    if (existingPhone) {
        return res.status(400).json({
            status: false,
            message: "User already exists"
        });
    }


    return next()
}

export default userExist