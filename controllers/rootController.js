import Note from "../models/users.js";

const rootController = async (req, res) => {
  const users = await Note.find({});
  res.status(200).render("index", { title: "Homepage", users: users });
};

export default rootController;
