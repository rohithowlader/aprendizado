const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to my page using router");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    res.status(200).send("Welcome to Registeration page using router");
  } catch (error) {
    console.log(error);
  }
};
module.exports = { home, register };
