// We need to use "mongoose": "^5.13.7",
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
const router = require("express").Router();

let gfs;

const conn = mongoose.connection;
// This for console warnings.
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
conn.once("open", function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("photos");
});

router.get("/:filename", async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } catch (error) {
    res.send("Not found!");
  }
});

router.delete("/:filename", async (req, res) => {
  try {
    await gfs.files.deleteOne({ filename: req.params.filename });
    res.send({ message: "You deleted successfully!" });
  } catch (error) {
    console.log(error);
    res.send("An error occured!");
  }
});

module.exports = router;
