module.exports.userValidator = async (req, res, next) => {

   const { body } = req;

   if (body?.name === "" || !body?.name) {
      return res.status(400).send({ error: "Name required!" });
   }
   if (body?.gender === "" || !body?.gender) {
      return res.status(400).send({ error: "Gender required!" });
   }
   if (body?.address === "" || !body?.address) {
      return res.status(400).send({ error: "Address required!" });
   }
   if (body?.contact === "" || !body?.contact) {
      return res.status(400).send({ error: "Contact required!" });
   }
   if (body?.photoUrl === "" || !body?.photoUrl) {
      return res.status(400).send({ error: "Photo url required!" });
   }

   next();
}


module.exports.updateUserValidator = async (req, res, next) => {

   const { body } = req;

   

   if (body?.name === "") {
      return res.status(400).send({ error: "Name required!" });
   }
   if (body?.gender === "") {
      return res.status(400).send({ error: "Gender required!" });
   }
   if (body?.address === "") {
      return res.status(400).send({ error: "Address required!" });
   }
   if (body?.contact === "") {
      return res.status(400).send({ error: "Contact required!" });
   }
   if (body?.photoUrl === "") {
      return res.status(400).send({ error: "Photo url required!" });
   }

   next();
}


