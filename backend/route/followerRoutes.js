import { followUserRequest, acceptFollowRequest, rejectFollowRequest, getAllFollowerAndFollowing } from "../controller/followerController.js";
import express from "express";

const followerRouter = express.Router();

followerRouter.post("/:username/followUserRequest", followUserRequest);
followerRouter.patch("/:username/acceptFollowRequest", acceptFollowRequest);
followerRouter.delete("/:username/rejectFollowRequest", rejectFollowRequest);
followerRouter.get("/:username/getAllFollowerAndFollowing", getAllFollowerAndFollowing);

export default followerRouter