import express from "express";
import userController from "../controller/user.controller"; // Verify this path is correct

const router = express.Router();

router.post("/", userController.createUser);
router.get("/top", userController.getTopUsers);
router.get("/:id", userController.getUserById);
router.post("/:id/gain-exp", userController.gainExp);

export default router;