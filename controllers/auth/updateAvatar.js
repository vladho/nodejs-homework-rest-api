const express = require("express");
const path = require("path");
const router = express.Router();

const uploadDir = path.join(process.cwd(), "upload");
const { user: service } = require("../../services");

const updateAvatar = async (req, res, next) => {
  const id = req.user._id;
  console.log(req.newUrl);
  const newAvatarUrl = req.newUrl;

  try {
    await service.update(
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

module.exports = updateAvatar;
