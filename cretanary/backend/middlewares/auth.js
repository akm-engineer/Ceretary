import jwt from "jsonwebtoken";
import User from "../model/user.js";

export const authenticateUser = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      //Get token from header
      token = authorization.split(" ")[1];

      //verify token
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);

      //get user from token
      req.user = await User.findById(userId).select("-password");
      next();
    } catch (error) {
      res.status(402).json({ error: "UNauthorized User" });
    }
  }
  if (!token) {
    res.status(404).json({ error: "Unauthorized user not found" });
  }
};
