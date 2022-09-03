const express = require("express");
const { getRandomUser,
   getAllUsers,
   updateUserDataController,
   saveUserController,
   deleteUserController,
   bulkUpdateUserDataController } = require("../controllers/users.controller");
const { userValidator, updateUserValidator } = require("../middlewares/userValidator");
const router = express.Router();

try {
   // get a random user
   router.get("/random", getRandomUser);

   // read all the users
   router.get("/all", getAllUsers);

   // Inserting new user
   router.post("/save", userValidator, saveUserController);

   // Update user details by user id
   router.patch("/update/:id", updateUserValidator, updateUserDataController);

   //  delete user by his id
   router.delete("/delete/:id", deleteUserController);

   // bulk updating
   router.patch("/bulk-update", bulkUpdateUserDataController);

} catch (error) {
   res.status(500).send({ error: error?.message });
}

module.exports = router;