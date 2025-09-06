import express from "express"
import { login, logout, signup, updateProfile ,checkAuth} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)

//pehle check kro authentic user h ya nahi
//this will be done by middlewares
router.put("/update-profile",protectRoute,updateProfile)
router.get("/check",protectRoute,checkAuth);
export default router;