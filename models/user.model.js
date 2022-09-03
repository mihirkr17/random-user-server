module.exports.userUpdateModel = (body, restUser) => {
   return {
      id: restUser?.id || body?.id,
      name: body?.name || restUser?.name,
      gender: body?.gender || restUser?.gender,
      address: body?.address || restUser?.address,
      contact: body?.contact || restUser?.contact,
      photoUrl: body?.photoUrl || restUser?.photoUrl,
   }
}


module.exports.userModel = (body, id) => {
   return {
      id: body?.id || id + 1,
      name: body?.name,
      gender: body?.gender,
      address: body?.address,
      contact: body?.contact,
      photoUrl: body?.photoUrl,
   }
}