const express = require("express");
const cors = require("cors");

const careerRoutes = require("./routes/careers");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/careers", careerRoutes);

app.get("/", (req, res) => {
  res.send("SkillBridge Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});