const jwt = require("jaonwebtoken");
const secretKey = "ok999'k9lik;."

const verifyToken = async(req, res, next) => {
    try{
        const token = await req.headers.authorization;
        const verify = jwt.verify(token, secretKey);
        if(verify){
            next();
        }
    }catch (error){
        res.status(401).send(error);
    }
};
module.exports = verifyToken;