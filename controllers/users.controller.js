const { userUpdateModel, userModel } = require("../models/user.model");
const { getUserList, writeFileHandler } = require("../utils/common");

module.exports.getRandomUser = async (req, res) => {
   const data = await getUserList();
   if (data) {
      const randomUser = data[Math.floor((Math.random() * data.length))];
      randomUser ? res.status(200).send(randomUser) :
         res.status(500).send({ error: "Internal server error" });
   }
}

module.exports.getAllUsers = async (req, res) => {
   const { query } = req;
   const limit = parseInt(query.s);
   const data = await getUserList(limit);
   data ? res.status(200).send(data) :
      res.status(500).send({ error: "Internal server error" });
}

module.exports.saveUserController = async (req, res) => {
   const { body } = req;
   const existsUser = await getUserList();
   const findExistingUser = existsUser.some(p => p.id === parseInt(body?.id));

   if (findExistingUser) {
      return res.status(400).send({ message: "User Id already exists, Please try with another id" });
   }

   const lastId = existsUser[existsUser.length - 1];

   existsUser.push(userModel(body, lastId.id));

   await writeFileHandler(existsUser) ?
      res.status(200).send({ message: "Write success", statusCode: 200, success: true }) :
      res.status(500).send({ error: "Internal server error" });
}

module.exports.updateUserDataController = async (req, res) => {
   const { params, body } = req;


   const existsUser = await getUserList();

   let thisUser = existsUser.find(p => p.id === parseInt(params.id));
   if (thisUser) {
      const index = existsUser.indexOf(thisUser);

      const newUser = userUpdateModel(body, thisUser);
      existsUser.splice(index, 1, newUser);

      await writeFileHandler(existsUser) ?
         res.status(200).send({ message: "Write success", statusCode: 200, success: true }) :
         res.status(500).send({ error: "Internal server error" });
   } else {
      return res.status(400).send({ error: "User not found" });
   }
}

module.exports.deleteUserController = async (req, res) => {
   const { params } = req;

   const existsUser = await getUserList();

   const isUser = existsUser.find(p => p.id === parseInt(params.id));

   if (isUser) {

      const restUser = existsUser.filter(p => p.id !== parseInt(params.id));

      await writeFileHandler(restUser) ?
         res.status(200).send({ message: "Successfully deleted", success: true, statusCode: 200 }) :
         res.status(500).send({ error: "Internal server error" });
   } else {
      return res.status(400).send({ error: "User not found" });
   }

}

module.exports.bulkUpdateUserDataController = async (req, res) => {
   const { body } = req;
   const existsUser = await getUserList();

   let thisUser = existsUser.find(p => p.id === parseInt(params.id));
   if (thisUser) {
      const index = existsUser.indexOf(thisUser);

      const newUser = userUpdateModel(body, thisUser);
      existsUser.splice(index, 1, newUser);

      await writeFileHandler(existsUser) ?
         res.status(200).send({ message: "write success", statusCode: 200, success: true }) :
         res.status(500).send({ error: "Internal server error" });
   } else {
      return res.status(400).send({ error: "User not found" });
   }
}