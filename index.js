import express from "express";

const web_port = 3030;
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "您好" });
});

app.use(express.static("public"));

app.listen(web_port, () => {
  console.log(`伺服器啟動於通訊埠：${web_port}`);
});
