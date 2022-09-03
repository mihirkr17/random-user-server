const fs = require("fs/promises");

module.exports.getUserList = async (limit = 0) => {

   const data = JSON.parse(await fs.readFile("user.json", "utf8", (err, data) => {
      if (err) { return res.status(404).send({ error: "No such file or directory" }) };
      return data;
   })) || [];

   if (limit > 0) {
      return data && data.slice(0, limit);
   } else {
      return data;
   }
}

module.exports.writeFileHandler = async (data) => {
   await fs.writeFile("user.json", JSON.stringify(data));
   return "Write success"
}