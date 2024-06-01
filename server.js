import experess from "express";
import path from "path";
import url from "url";
import indexRoute from "./routes/root.js";
import newNote from "./routes/newNote.js";
import connectDB from "./config/config.js";

connectDB();

const app = experess();

const port = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(experess.urlencoded({ extended: false }));

app.use(experess.static(path.join(__dirname, "public")));

app.use("/", indexRoute);
app.use("/new", newNote);

app.all("*", (req, res) => {
  res.status(404);
  res.render("404", { title: "not found" });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
