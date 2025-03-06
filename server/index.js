import express from "express";
import ImageKit from "imagekit";
import cors from "cors";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;
const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting database", error);
  }
};
const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

app.get("/api/upload", (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.post("/api/chats", (req, res) => {
  const { text } = req.body;
  console.log("text----------", text);
});

app.listen(port, () => {
  connect();
  console.log(`Server is runing on port ${port}`);
});
