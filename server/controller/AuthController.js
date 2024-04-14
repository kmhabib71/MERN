const register = async (req, res) => {
  const { email, password } = req.body;

  console.log("Email is: ", email);
  console.log("Password is: ", password);
  res.status(200).json({ message: "Registration Successfull!" });
};

module.exports = {
  register,
};
