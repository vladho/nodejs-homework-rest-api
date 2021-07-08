const express = require("express");
// const multer = require("multer");
const path = require("path");
// const app = express();
const router = express.Router();

// const tempDir = path.join(process.cwd(), "temp");
const uploadDir = path.join(process.cwd(), "upload");
// const static = path.join(process.cwd());
const { user: service } = require("../../services");
// console.log(tempDir);
// console.log(uploadDir);
// console.log(static);
// router.use("/", express.static(path.join(process.cwd(), "public")));

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

// console.log(upload);

const updateAvatar = async (req, res, next) => {
  const id = req.user._id;

  try {
    const newAvatarUrl = req.newUrl;
    await service.updateAvatar(
      { _id: id },
      { avatarURL: newAvatarUrl },
      { new: true }
    );
    res.status(200).json({
      avatarURL: newAvatarUrl,
    });
  } catch (error) {
    await fs.unlink(tempName);
    next(error);
  }
};

module.exports = router;
