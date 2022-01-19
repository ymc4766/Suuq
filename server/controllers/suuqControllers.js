import Suuq from "../models/suuqModel.js";

const getSuuq = async (req, res) => {
  const suuq = await Suuq.find({});

  res.status(200).json(suuq);
};

const getSuuqById = async (req, res) => {
  const suuq = await Suuq.findById(req.params.id);

  if (suuq) {
    res.json(suuq);
  } else {
    res.status(404).json("suuq not Found!!");
  }
};

export { getSuuq, getSuuqById };
