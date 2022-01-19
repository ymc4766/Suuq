import dotenv from "dotenv";
import connectDB from "./config/db.js";
import items from "./data/items.js";
// import items from "./data/items.js";
import products from "./data/products.js";
import users from "./data/users.js";
import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";
import Suuq from "./models/suuqModel.js";
import User from "./models/userModel.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    // await Product.deleteMany();
    await User.deleteMany();
    await Suuq.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;
    const adminItems = createdUsers[1]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    const suuqSamples = items.map((item) => {
      return { ...item, user: adminItems };
    });

    // await Product.insertMany(sampleProducts);
    await Suuq.insertMany(suuqSamples);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

importData();

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Suuq.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
