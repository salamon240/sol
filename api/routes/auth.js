const router = require("express").Router();
const User = require("../models/User");
const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
//register( craetin=post, update=put ,fetch=get)
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJs.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const user = await newUser.save();

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login
router.post("/login", async(req, res) => {
  try {
    const user =await User.findOne({ email: req.body.email });
    !user && res.status(401).json("worng password or username");

    const byte = cryptoJs.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = byte.toString(cryptoJs.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("worng password or username");

    const accessTokon = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;
    res.status(200).json({...info,accessTokon});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
