import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  console.log("login route");
});
router.get("/login", (req, res) => {
  console.log("login route");
});
router.get("/logout", (req, res) => {
  console.log("login route");
});

export default router;