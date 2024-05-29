import experess from "express";
import indexRoute from "./routes/root.js";
import newUser from "./routes/newUser.js";
import errorHandler from "./middleware/errorHandler.js";
import path from "path";
import url from "url";

const app = experess();

const port = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(experess.urlencoded({ extended: false }));
app.use(experess.json());

app.use(experess.static(path.join(__dirname, "public")));

app.use("/", indexRoute);
app.use("/new", newUser);

app.all("*", (req, res) => {
  res.status(404);
  res.render("404", { title: "not found" });
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
