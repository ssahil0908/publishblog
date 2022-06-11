const router = require("express").Router();
const User = require("../models/user");
const Post = require("../models/post");
const bcrypt = require("bcrypt");

//UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
     
      const updates = {}
      if (req.body.username) {
        updates.username = req.body.username
      }
      if (req.body.email) {
        updates.email = req.body.email
      }
      if (req.body.password) {
        updates.password = req.body.password
      }
      if (req.body.profilePic) {
        updates.profilePic = req.body.profilePic
      }
      
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
       /* $set: { username:req.body.username,
           email:req.body.email,
          profilePic:req.body.profilePic,
          password:req.body.password  }   */
          $set:updates,  
        },
        { new: true }
      );
     
      res.status(200).json(updatedUser);
    } catch (err) {
      console.log('Hiiiii');
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
});

//GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;