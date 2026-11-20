
import { body, validationResult } from "express-validator";

export const userValidations = [
  body("fullName").trim().notEmpty().withMessage("Full name is required"),

  body("email").trim().isEmail().withMessage("Please provide a valid email").normalizeEmail(),

  body("password").notEmpty().withMessage("Password is required") .isStrongPassword({
      minUppercase: 1,
      minSymbols: 1,
    })
    .withMessage("Password should be strong with at least 1 uppercase and 1 symbol"),

  body("role") .optional().trim().toLowerCase().isIn(["user", "admin"]).withMessage("Role should be either user or admin"),
];

export const validateUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array().map((err) => err.msg), "errors to be displayed");
    return res.status(400).json({
      success: false,
      errors: errors.array().map((err) => err.msg),
    });
  }
  next();
};
