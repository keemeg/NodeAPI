const express = require("express");
const app = express();
const uuidAPIKey = require("uuid-apikey");

const server = app.listen(3001, () => {
  console.log("💫 Start Server 3001");
});

// console.log(uuidAPIKey.create());

const key = {
  apiKey: "BK7D492-HK0MGT7-GH977YS-4T2NGRT",
  uuid: "5cced224-8cc1-4868-8452-73fb26855863",
};

app.get("/api/users/:apikey/:type", async (req, res) => {
  let { apikey, type } = req.params;
  if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
    res.send("apikey is not valid.");
  } else {
    if (type == "seoul") {
      let data = [
        { name: "홍길동", city: "seoul" },
        { name: "김철수", city: "seoul" },
      ];
      res.send(data);
    } else if (type == "jeju") {
      let data = [
        { name: "박지성", city: "jeju" },
        { name: "손흥민", city: "jeju" },
      ];
      res.send(data);
    } else {
      res.send("Type is not correct.");
    }
  }
});
