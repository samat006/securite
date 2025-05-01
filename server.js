const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 3000;
const FILE = "clicks.json";

app.use(cors());
app.use(express.json());

let clicks = 0;

// Charger le compteur depuis le fichier
if (fs.existsSync(FILE)) {
  clicks = JSON.parse(fs.readFileSync(FILE)).clicks;
}

app.get("/clicks", (req, res) => {
  res.json({ clicks });
});

app.post("/clicks", (req, res) => {
  clicks++;
  fs.writeFileSync(FILE, JSON.stringify({ clicks }));
  res.json({ clicks });
});

app.listen(PORT, () => {
  console.log(`Serveur actif sur http://localhost:${PORT}`);
});
