const router = require("express").Router();
const passport = require("passport");
const User = require("../schemas/userSchema");
const userAuth = require("../middleware/userAuth");

const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success",userAuth , async (req, res) => {
  console.log(req.user)
  if (req.user) {
    let isUser = await User.findOne({ googleId: req.user.id });

          if (!isUser) {
            const userDoc = new User({ googleId: req.user.id });
            await userDoc.save();
          }

    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({
    success: false,
    message: "failure",
  });
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
