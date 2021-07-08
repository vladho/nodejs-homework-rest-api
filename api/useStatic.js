const express = require("express");
// const multer = require("multer");
const path = require("path");
// const app = express();
const router = express.Router();

// const tempDir = path.join(process.cwd(), "temp");
// const uploadDir = path.join(process.cwd(), "upload");
// const static = path.join(process.cwd());

// console.log(tempDir);
// console.log(uploadDir);
// console.log(static);
router.use("/", express.static(path.join(process.cwd(), "public")));
// console.log(path.join(process.cwd(), "public"));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, tempDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
//   limits: {
//     fileSize: 10000000,
//   },
// });

// const upload = multer({
//   storage,
// });

// // console.log(upload);

// router.post("/static", async (req, res, next) => {
//   console.log("test");
//   //   const { path: tempName, originalname } = req.file;
//   //   const fileName = path.join(uploadDir, originalname);
//   //   try {
//   //     await fs.rename(tempName, fileName);
//   //   } catch (error) {
//   //     await fs.unlink(tempName);
//   //     next(error);
//   //   }
// });

module.exports = router;
