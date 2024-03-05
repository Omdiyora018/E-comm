const logomodel = require("../Model/logo");
// add logo code for insert the logo
const addlogo = async (req, res) => {
    try {
        const { logoname, price, description } = req.body;

        var arrimage = [];
        for (let i = 0; i < req.files.length; i++) {
            arrimage[i] = req.files[i].filename;
        }
        const data = await logomodel.create({
            logoname: logoname,
            price: price,
            description: description,
            images: arrimage

        });
        res.status(200).send({ message: "logo are added", data: data });
    } catch (error) {
        res.status(401).send(error);
    }
}
// display all logo
const alllogo = async (req, res) => {
    const data = await logomodel.find()
    res.send(data)
}
// query for update
const updatelogo = async (req, res) => {
    const { logoname, price, description } = req.body;
    const upid = req.params.id;
    var arrimage = [];
    for (let i = 0; i < req.files.length; i++) {
        arrimage[i] = req.files[i].filename;
    }
    const present = await logomodel.findOne({ _id: upid });
    // console.log("data find",present);
    if (present) {
        const data = await logomodel.findByIdAndUpdate({ _id: upid }, {
            image: arrimage,
            logoname: logoname,
            price: price,
            description: description
        }, { new: true });
        res.send(data);
    }
}
// query for delete
const dellogo = async (req, res) => {
    try {
        const data = await logomodel.findByIdAndDelete(req.params.id)
        console.log(data);
        res.send(data);

    } catch (error) {
        res.send(error)
    }

}
const searchProduct = async (req, res) => {

    try {
        var search = req.body.search;
        const products = await logomodel.find({ logoname: { $regex: search, $options: "i" } });

        res.status(200).send({ massage: "logo are defined", data: products })
        // console.log(products);
        // console.log(search);
    

    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    addlogo,
    alllogo,
    updatelogo,
    dellogo,
    searchProduct
};
