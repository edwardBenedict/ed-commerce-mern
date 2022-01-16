const Product = require("../db/models/product");

const addProduct = async (req, res) => {
  // Our login logic starts here
  try {
    // Get user input
    const { name, category, description, price, brand } = req.body;

    // Validate user input
    if (!(name && category && description && price && brand)) {
      return res.status(400).send({
        message: "Name, Category, Description and Price is required!",
      });
    }

    const product = await Product.create({
      name,
      category,
      description,
      price,
      brand,
    });

    res.status(200).json({ product, message: "Product added Successfully!" });
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};

module.exports = { addProduct };
