const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const { collection } = require("./db/conn");
const { videos } = require("./db/conn");
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
  const { loginEmail, loginPassword } = req.body;
  try {
    const user = await collection.findOne({ email: loginEmail });
    if (user) {
      if (user.password === loginPassword) {
        res.json(user);
      } else {
        res.json("WrongPassword");
      }
    } else {
      res.json("notExist");
    }
  } catch (e) {
    console.log(e);
  }
});

app.post("/deleteVideo", async (req, res) => {
  const { id } = req.body;
  try {
    await videos.deleteOne({ _id: id });
    res.json("Deleted successfully");
  } catch (e) {
    console.log(e);
  }
});

app.get("/liveVideo", async (req, res) => {
  console.log("live");
  try {
    const liveVideos = await videos.find({ type: "live" });
    console.log(liveVideos);
    if (liveVideos.length > 0) {
      res.json(liveVideos);
    } else {
      res.json("notExist");
    }
  } catch (e) {
    console.log(e);
  }
});

app.get("/channelVideo", async (req, res) => {
  console.log("live");
  try {
    const channelVideos = await videos.find({ type: "channel" });

    if (channelVideos.length > 0) {
      res.json(channelVideos);
    } else {
      res.json("notExist");
    }
  } catch (e) {
    console.log(e);
  }
});

app.get("/latestVideo", async (req, res) => {
  console.log("live");
  try {
    const latestVideos = await videos.find({ type: "latest" });

    if (latestVideos.length > 0) {
      res.json(latestVideos);
    } else {
      res.json("notExist");
    }
  } catch (e) {
    console.log(e);
  }
});

app.get("/videos1", async (req, res) => {
  try {
    const videos1 = await videos.find({ type: "videos" });

    if (videos1.length > 0) {
      res.json(videos1);
    } else {
      res.json("notExist");
    }
  } catch (e) {
    console.log(e);
  }
});

app.get("/categoriesVideo", async (req, res) => {
  console.log("live");
  try {
    const categoriesVideos = await videos.find({ type: "categories" });

    if (categoriesVideos.length > 0) {
      res.json(categoriesVideos);
    } else {
      res.json("notExist");
    }
  } catch (e) {
    console.log(e);
  }
});

app.get("/popularVideo", async (req, res) => {
  try {
    const popularVideos = await videos.find({ type: "popular" });

    if (popularVideos.length > 0) {
      res.json(popularVideos);
    } else {
      res.json("notExist");
    }
  } catch (e) {
    console.log(e);
  }
});

app.get("/allVideo", async (req, res) => {
  try {
    const popularVideos = await videos.find();

    if (popularVideos.length > 0) {
      res.json(popularVideos);
    } else {
      res.json("notExist");
    }
  } catch (e) {
    console.log(e);
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const data = {
    name: name,
    email: email,
    password: password,
    type: "user",
  };
  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("notExist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    console.log(e);
  }
});

app.post("/upload", async (req, res) => {
  const { link, type } = req.body;
  console.log(req.body, "rq.body");
  const data = {
    link,
    type,
  };
  try {
    await videos.insertMany(data);
    res.json(data);
  } catch (e) {
    console.log(e);
  }
});

app.post("/updatePassword", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body, "rq.body");

  try {
    await collection.updateOne({ email: email }, { password: password });
    res.json("password changed");
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
