import User from "../model/user.js";
import jwt from "jsonwebtoken";

let JWT_SECRET = "jfbdskjfbkdjsfbkjdsb3u78dsjk";

export const createUser = async (req, res) => {
  try {
    // Getting data from request body
    const { name, email, password } = req.body;

    // Checking for duplicacy
    const oldUser = await User.findOne({ email });
    if (oldUser) return res.status(401).json({ error: "Email already exists" });

    // Creating a new user instance
    const newUser = new User({ name, email, password });

    // Saving the new user to the database
    await newUser.save();

    // Respond with user information
    res.status(201).json({
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    // Handling errors
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user." });
  }
};

export const signIn = async (req, res) => {
  try {
    // Getting data from request body
    const { email, password } = req.body;

    // Find user in our db by email
    const signInUser = await User.findOne({ email });
    if (!signInUser)
      return res.status(401).json({ error: "Email/password mismatch" });

    // Comparing password with our db
    const matched = await signInUser.comparePassword(password);
    if (!matched)
      return res.status(401).json({ error: "Email/password mismatch" });

    // Extracting data after sign-in
    const { _id, name, role } = signInUser;

    // Generate JWT token :- used by front-end to authenticate backend
    const jwtToken = jwt.sign({ userId: _id }, JWT_SECRET);

    // Respond with user information and the JWT token
    res.json({
      signInUser: {
        id: _id,
        name,
        role,
        email,
        token: jwtToken,
      },
    });
  } catch (error) {
    // Handling errors
    console.error("Error signing in user:", error);
    res.status(500).json({ error: "An error occurred while signing in." });
  }
};
