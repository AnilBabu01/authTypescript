import { Router } from "express";
import {
  registerUser,
  loginUser,
  getusers,
  forgetpassword,
  resetpassword,
} from "../controllers/authController";

export const router = Router();

router.post("/regster", registerUser);
router.post("/login", loginUser);
router.post("/forgetpassword", forgetpassword);
router.get("/resetpassword", resetpassword);
router.get("/getAlluers", getusers);
