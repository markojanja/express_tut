import users from "../models/users.js";

const rootController = (req, res) => {
  const locals = { title: "Homepage", users: users };
  res.status(200).render("index", locals);
};

export default rootController;
