const initialData = require("./user.json");
const { createUserModel } = require("./model/userModel");
const debug = require("debug")("server:userData");

const userData = async () => {
  for (let i = 0; i < initialData.length; i++) {
    const user = initialData[i];
    try {
      debug(`creating user ${user.username}`);
      const newUser = await createUserModel(user);
      debug(`created user ${newUser.username} with id ${newUser._id}`);
    } catch (err) {
      debug(`error creating user ${user.username}`);
      debug(err.message);
    }
  }
  debug("finished loading initial data");
};
userData();
