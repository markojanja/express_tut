import Note from "../models/users.js";

const rootController = async (req, res) => {
  const notes = await Note.find({});
  res.status(200).render("index", { title: "Homepage", notes: notes });
};

export default rootController;
