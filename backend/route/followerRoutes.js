import { followUserRequest, acceptFollowRequest, rejectFollowRequest, getAllFollowers, getAllFollowing } from "../controller/followerController.js";
import express from "express";

const router = express.Router();

router.post("/:username/followUserRequest", followUserRequest);
router.patch("/:username/acceptFollowRequest", acceptFollowRequest);
router.delete("/:username/rejectFollowRequest", rejectFollowRequest);
router.get("/:username/getAllFollowers", getAllFollowers);
router.get("/:username/getAllFollowing", getAllFollowing);

export default router