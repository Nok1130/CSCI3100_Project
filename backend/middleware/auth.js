/*
    This file is for some useful functions of authenticating users.
*/
import jwt from "jsonwebtoken";
import User from "../model/User.js";
import ENV from "../ENV.js";

/*
    This function checks whether the user is logged in by verifying the token. If verified, the information
    of this user will be stored in req.user for further usage.
    (For the functions following this function, they can directly access req.user for user information.)
*/
export async function auth(req, res, next) {
  //check whether the header contains authorization information
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    /*
            Get the token.
            The token, as jwt tokens, are sent in the header via Authorization: Bearer <token>
        */
    try {
      //decode the token and check whether this user exists in the database
      const token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, ENV.ACCESS_TOKEN_SECRET);
      const user = await User.findOne({userID : decode.userID}).select("-password");

      if (!user) {
        //user does not exist
        res.status(401).json({ error: "Authentication Failed!" });
      }
      //store the user information and perform the next steps
      req.user = user;
      console.log("req.user: ", req.user);
      next();
    } catch (error) {
    //   console.log(error);
      res.status(401).json({ error: "Authentication Failed! Token Failed" });
    }
  } else {
    res.status(401).json({ error: "Authentication Failed! No Token" });
  }
}

/*
    This function checks whether the user is an admin user. It should be called after Auth().
    Since user information is already stored, this function is rather straightforward.
*/
export async function checkAdmin(req, res, next) {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({ error: "Authentication Failed!" });
  }
}
