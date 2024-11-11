const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
    try {
      const { email, password, username } = req.body; // Don't require createdAt, it can be set server-side
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.json({ message: "User already exists" });
      }
  
      const user = await User.create({
        email,
        password: password,  // Store hashed password
        username,
        createdAt: new Date(),  // Automatically set createdAt
      });
  
      const token = createSecretToken(user._id);
  
      // Set token as HttpOnly for security
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: true,  
      });
  
      res
        .status(201)
        .json({ message: "User signed in successfully", success: true, user });
  
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error during signup" });
    }
  };
  
module.exports.Login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.json({ message: 'All fields are required' });
      }
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ message: 'Incorrect password or email' });
      }
  
      // Directly compare plain-text password with hashed password in the database
      const auth = await bcrypt.compare(password, user.password);
      console.log("Password match:", auth);  // Log to check the result of bcrypt.compare
  
      if (!auth) {
        return res.json({ message: 'Incorrect password or email' });
      }
  
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: true,
      });
  
      res.status(201).json({ message: "User logged in successfully", success: true });
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error during login" });
    }
  };
  

//   seems like when comparing bcrypt is generating new hash
  
  
  
