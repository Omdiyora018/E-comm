const category = require('../Model/category')

const addCategory = async (req, res) => {
    try {
        const { categoryName } = req.body;
        var arrImage = [];

        for (let i = 0; i < req.files.lenght; i++) {
            arrImage[i] = req.files[i].filename;
        }
        const data = await category.create({
            categoryName: categoryName,
            images: arrImage,
        });
        res.status(200).send({ message: "Category add successfully", data: data });


    } catch (error) {
        res.status(401).send(error);
    }
}

// exports.module = { addCategory }

module.exports = {
    addCategory
}