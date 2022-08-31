// server default set
const express = require("express");
const app = express();
const port = 3000;


// 뷰 템플릿 엔진 셋팅
app.set("view engine", "ejs");
app.set("views", ".\/client\/login");  // login view

app.use(express.static(".\/client\/login"));


module.exports = {
  app,
  port
}
