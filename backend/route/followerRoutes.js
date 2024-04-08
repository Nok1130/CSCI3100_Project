import { followUserRequest, acceptFollowRequest, rejectFollowRequest, getAllFollowerAndFollowing } from "../controller/followerController.js";
import express from "express";

const followerRouter = express.Router();

followerRouter.post("/followUserRequest", followUserRequest);
followerRouter.patch("/acceptFollowRequest", acceptFollowRequest);
followerRouter.delete("/rejectFollowRequest", rejectFollowRequest);
followerRouter.post("/getAllFollowerAndFollowing", getAllFollowerAndFollowing);

export default followerRouter