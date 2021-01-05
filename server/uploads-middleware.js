const path = require('path');
const multer = require('multer');

const imagesDirectory = path.join(__dirname, 'public/images');

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, imagesDirectory);
  },
  filename(req, file, callback) {
    const fileExtension = path.extname(file.originalname);
    const profilePictureUrl = `${file.fieldname}-${Date.now()}${fileExtension}`;
    callback(null, profilePictureUrl);
  }
});

const uploadsMiddleware = multer({ storage }).single('profilePictureUrl');

module.exports = uploadsMiddleware;
