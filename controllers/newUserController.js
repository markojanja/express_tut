import users from "../models/users.js";

const locals = {
  title: "new",
  error: null,
};

const newUserController = (req, res) => {
  res.status(200).render("new-user", { ...locals });
};
const addUser = (req, res) => {
  const { user } = req.body;

  if (!user || user.trim() === "") {
    const error = new Error("User name cannot be empty.");
    res.status(400);
    res.render("new-user", { ...locals, error: error.message });
    return;
  }

  const newUser = {
    id: users.length + 1,
    name: user,
  };
  console.log("this is user ", user);
  users.push(newUser);
  res.redirect("/");
};

export { newUserController, addUser };
