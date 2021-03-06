const Product = require("../db/models/product");

const addProduct = async (req, res) => {
  // Our login logic starts here

  try {
    // Get user input
    const { name, category, description, price, brand } = req.body;

    // Validate user input
    if (!(name && category && description && price && brand)) {
      return res.status(400).send({
        message: "Name, Category, Description, Brand and Price is required!",
      });
    }

    if (req.file === undefined)
      return res.json({ message: "You must select a file." });
    const imgUrl = `${process.env.HOST_DOMAIN}:${process.env.SERVER_PORT}/api/file/${req.file.filename}`;

    const product = await Product.create({
      name,
      category,
      description,
      price,
      brand,
      image: imgUrl,
    });

    res.status(200).json({ product, message: "Product added Successfully!" });
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};

const getProducts = async (req, res) => {
  try {
    Product.find({}, function (err, products) {
      if (err) {
        res.status(500).send({ message: "Something Went Wring!", err });
      } else {
        res.status(200).send([...products]);
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).send(await Product.findById(id));
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted successfully!" });
  } catch (error) {
    res.status(500).send({ message: "Something Went Wring!" });
  }
};

const updateProduct = async (req, res) => {
  let imgUrl;
  if (req.file) {
    imgUrl = `${process.env.HOST_DOMAIN}:${process.env.SERVER_PORT}/api/file/${req.file.filename}`;
  }

  Product.findByIdAndUpdate(
    req.params.id,
    { ...req.body, image: imgUrl ? imgUrl : req.body.image },
    function (err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    }
  );
};

module.exports = {
  addProduct,
  getProducts,
  deleteProduct,
  getProduct,
  updateProduct,
};
