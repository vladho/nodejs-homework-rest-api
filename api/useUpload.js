const multer = require("multer");
const path = require("path");

const tempDir = path.join(process.cwd(), "tmp");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 1000000,
  },
});

const useUpload = () =>
  multer({
    storage,
  });

module.exports = useUpload;
