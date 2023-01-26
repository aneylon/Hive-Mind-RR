const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middleware = jsonServer.defaults();
const port = 4200;
server.use(jsonServer.bodyParser);
server.use(middleware);
server.get("/test", (req, res) => {
  console.log("test get");
  res.json("test get");
});
server.post("/user/signin", (req, res, next) => {
  const { email, password } = req.body;
  if (email === "good@user") {
    res.status(200).json({ token: "goodToken", email });
  } else {
    res.status(400).json({ error: "there was an error" });
  }
});
server.post("/user/signup", (req, res, next) => {
  const { email, password } = req.body;
  if (email === "good@user") {
    res.status(200).json({ token: "goodToken", email });
  } else {
    res.status(400).json({ error: "mo money mo problems" });
  }
});

server.use(router);

server.listen(port, () => {
  console.log(`Json Server running on port:${port}`);
});
