const userModel = require("../Model/user")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const secretKey = "ok999'k9lik;."

const userGet = async (req, res) => {
  const data = await userModel.find();
  // console.log(req.body);
  res.send(data);
}

const userPost = async (req, res) => {
  try {
    console.log("Helloooo.......");
    const { name, password, email, address, phone } = req.body
    const usser = await userModel.findOne({email:email})
    if(usser){
      return res.send("email already exists")
    }
    const pass = await bcrypt.hash(password, 10);
    const data = await userModel.create({
      name: name,
      password: pass,
      address: address,
      email: email,
      phone: phone

    });
    res.send(data);
  } catch (error) {
    res.send(error)
  }

}
const userUpdate = async (req, res) => {
  const data = await userModel.findByIdAndUpdate(req.params.id, {
    name: req.body.name
  });
  res.send(data)
}

const userDele = async (req, res) => {
  // console.log(_id)
  let data = await userModel.findByIdAndDelete(req.params.id);{
    
  }
  res.send(data);
}

// const reg = async (req, res) => {

//   const pass = await bcrypt.hash(req.body.password, 10);

//   const newuser = await userModel.create(req.body);

//   console.log(req.body);
//   res.send(newuser);
// };
const usrLogin = async (req, res) => {
  const { email, password } = req.body
  const exists = await userModel.findOne({ email: email });
  console.log(exists, "1111111111111");
  const exists1 = await bcrypt.compare(password, exists.password)
  console.log(exists1, "22222222222222");
  // console.log();
  if (exists.email === email) {
    if (exists1) {
      // res.send(exists)
      const token = jwt.sign({id:exists._id,email:exists.email},secretKey,{
        expiresIn:2*(60*60)

      })
      res.status(200).send({
        message:"login successful",
        token,
        data:exists
    })
    } else {
      res.send("password is invalid")
    }
  }
  else {
    res.send("login failed")
  }
};
const searchProduct = async (req, res) => {

  try {
      var search = req.body.search;
      const products = await product.find({ name: { $regex: search, $options: "i" } });

      res.status(200).send({ massage: "Product", data: products })
      // console.log(products);
      // console.log(search);

  } catch (error) {
      res.send(error)
    }
}

module.exports = {
  userGet, userPost, userUpdate, userDele, usrLogin, searchProduct
}