// middleware/validator.js

import { check, validationResult } from "express-validator";

// Validation for user creation
export const userValidator = [
  check("name").trim().not().isEmpty().withMessage("Name is missing"),
  check("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Email is missing")
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid Email"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is missing")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must contain at least 8 characters"),
];

// Validation for sign-in
export const signInValidator = [
  check("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Email is missing")
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid Email"),
  check("password").trim().not().isEmpty().withMessage("Password is missing"),
];

// Middleware to handle validation errors
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({ error: errors.array()[0].msg });
  }
  next();
};
