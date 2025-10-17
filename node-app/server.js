const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/health", (_, res) => res.json({ status: "ok", app: "node-app" }));
app.get("/", (_, res) => res.send("Hello from node-app"));

app.listen(PORT, () => console.log(`node-app listening on ${PORT}`));
