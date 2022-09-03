const express = require("express");
const app = express();
const cors = require("cors");
const usersRoute = require("./routes/users.route");

require("dotenv").config();

// port define here
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/views"));
app.use("/user", usersRoute);

const server = app.listen(port, () => {
   console.log("server is running");
});

app.get("/", (req, res) => {
   res.status(200).send("Server is running on " + port);
});


