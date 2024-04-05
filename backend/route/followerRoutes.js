import { followUserRequest, acceptFollowRequest, rejectFollowRequest, getAllFollowerAndFollowing } from "../controller/followerController.js";
import express from "express";

const router = express.Router();

router.post("/:username/followUserRequest", followUserRequest);
router.patch("/:username/acceptFollowRequest", acceptFollowRequest);
router.delete("/:username/rejectFollowRequest", rejectFollowRequest);
router.get("/:username/getAllFollowerAndFollowing", getAllFollowerAndFollowing);

export default router