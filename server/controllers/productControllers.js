import Product from "../models/productModel.js";

// const createProducts = async (req, res) => {
//   const products = await Product.create(req.body);

//   res.status(201).jso({
//     success: true,
//     products,
//   });
// };

const getProducts = async (req, res) => {
  const products = await Product.find({});

  res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json("product not Found!!");
  }
};

export { getProducts, getProductById };
