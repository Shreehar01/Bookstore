import jwt from 'jsonwebtoken';

const auth = async(req, res, next) =>{
    try{
        console.log("Auth was called")
        const token = req.headers.authorization.split(" ")[1];
        console.log("Auth Step 1")
        const isCustomAuth = token.length < 500;
        let decodedData;
        if (token && isCustomAuth) {
            console.log("Auth Step 2")
            decodedData = jwt.verify(token, 'bookstoreapplication');
            console.log("Auth Step 3")
            req.userId = decodedData?.id;
            console.log("Auth Step 4")
        } else{
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        console.log("Auth Step 5")
        next();
    } catch (error) {
        console.log("Error was called")
        console.log(error);
    }
}

export default auth;