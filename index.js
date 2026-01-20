import express from "express";
import dotenv from "dotenv";
// import comments from "./comment.js";
import productsRoutes from "./routes/productsRoute.js";
import usersRoute from "./routes/usersRoute.js";
import cors from "cors";
import authRoute from "./routes/authRoute.js";

const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("wellcome to express server");
});

app.use("/products",productsRoutes);
app.use('/users',usersRoute);
app.use('/auth',authRoute);


// app.get("/profile", (req, res) => {
//   res.status(200).send("this is profile page");
// });

// app.get("/profile/:id", (req, res) => {
//   const id = req.params.id;
//   res.status(200).send(`this is profile page ${id}`);
// });

// app.get("/comments", (req, res) => {
//   res.status(200).send({ data: comments });
// });

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
