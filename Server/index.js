const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer')
const path = require('path')

app.use(express.static('public'));


const db = require("./Database/db.js")
const userData = require("./Controller/user.controller")
const addCatagorys = require('./Controller/addCategory');
const logo = require('./Model/logo.js');


app.use(express.json());
app.use(cors());

//multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "./public/cateimg"), (err) => {
            return err;
        });
    }, filename: (req, file, cb) => {
        const name = file.originalname;
        cb(null, name, (error, success) => {
            if (error) {
                return error;
            }
        })
    }
});

const upload = multer({ storage: storage });

// try {
// app.post('/addCategory', upload.array("images"), addCategory);
// } catch (error) {
//     console.log("api error " + error);
// }


app.post("/login", userData.usrLogin)
app.post("/regs", userData.userPost)
app.put("/user/:id", userData.userUpdate)
app.delete("/user/:id", userData.userDele)




app.post("/addlogo",upload.array("images"),logo.addlogo)
app.get("/alllogo",upload.array("images"),logo.alllogo)
app.put("/updatelogo/:id",upload.array("images"),logo.updatelogo)
app.delete("/dellogo/:id",upload.array("images"),logo.dellogo)
app.get("/search-logo",logo.searchProduct)


app.post("/addCatagory", upload.array('images'), addCatagorys.addCategory)

app.listen(7000);