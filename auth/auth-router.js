const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("./auth-model.js");

router.post("/register", (req, res) => {
    // implement registration
    let user = req.body;
    const hash = bcrypt.hashSync(user.Password);
    user.Password = hash;

    Users.add(user)
        .then(saved => {
            res.status(200).json(saved);
        })
        .catch(err => {
            res.status(500).json({ message: "There was an error..." });
        });
});

function generateToken(user) {
    const payload = {
        Username: user.Username,
        id: user.id
    };
    const options = {
        expiresIn: "1d"
    };
    return jwt.sign(payload, process.env.JWT_SECRET, options);
}

router.post("/login", (req, res) => {
    let { Username, Password } = req.body;

    Users.findBy({ Username })
        .first()
        .then(user => {
            // check that the password is valid
            if (user && bcrypt.compareSync(Password, user.Password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome ${user.Username}!`,
                    token
                });
            } else {
                res.status(401).json({ message: "Invalid Credentials" });
            }
        })
        .catch(error => {
            console.log("login error", error);
            res.status(500).json(error);
        });
});
module.exports = router;