const express = require("express");

const app = express();
const NRP = require("node-redis-pubsub");
const config = {
  port: 6379,
  scope: "mail",
};

app.use(express.json());
const router = express.Router();

const nrp = new NRP(config);
router.get("/user", (req, res) => {
  res.json({
    id: 11,
  });
});

router.post("/newuser", (req, res) => {
  const { userName, email } = req.body;
  nrp.emit("send_mail", { email });
  res.json({
    success: true,
    userName,
    email,
  });
});

app.use(router);

app.listen(8000, () => {
  console.log("8000", 8000);
});
