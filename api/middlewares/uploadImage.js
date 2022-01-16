const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
require("dotenv").config();

const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@trainingcluster.tpyei.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const storage = new GridFsStorage({
  url: dbURI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-edC-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-edC-${file.originalname}`,
    };
  },
});

module.exports = multer({ storage });
