const jwt = require("jsonwebtoken");
require("dotenv").config();

const { user: service } = require("../../services");

const login = async (req, res, next) => {
    const { email, password } = req.body
    
    try {
        const user = await service.getOne({ email })
        if (!user || !user.validPassword(password))
        {
            return res.status(400).json({
                status: "error",
                code: 400,
                message: " Incorrect email or password"
            })
        }
        const payload = {
            id: user._id
        }
        const { TOKEN_KEY } = process.env
        const token = jwt.sign(payload, TOKEN_KEY)
        res.json({
            status: "success",
            code: 200,
            data: {
                token
            }
        })
    }
    catch (error) {
        next(TypeError)
    }
}


module.exports = login