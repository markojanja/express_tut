import Note from "../models/users.js";

const locals = {
  title: "new",
  error: null,
};

const noteController = async (req, res) => {
  res.status(200).render("new-user", { ...locals });
};
const addNote = async (req, res) => {
  try {
    const { author, note } = req.body;
    if (!author || author.trim() === "") {
      const error = new Error("All fields are required.");
      res.status(400).render("new-note", { ...locals, error: error.message });
      return;
    }
    await Note.create({ author, note });

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export { noteController, addNote };
