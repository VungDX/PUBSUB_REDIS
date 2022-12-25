const express = require("express");

const app = express();
const NRP = require("node-redis-pubsub");

const router = express.Router();

const config = {
  port: 6379,
  scope: "mail",
};

const nrp = new NRP(config);

nrp.on("send_mail", (data) => {
  console.log("data nhận được ở mailServer", data);
});

router.get("/mail", (req, res) => {
  res.json({
    id: 10,
  });
});

app.use(router);

app.listen(7000, () => {
  console.log("7000", 7000);
});
