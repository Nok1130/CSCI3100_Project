import FollowerModel from "../model/Follower.js";

// create a new follow request
const followUserRequest = async (req, res) => {
    const { follower, following } = req.body;
    // console.log(follower, following);

    try {
        // check if the user want to follow themselves
        if (follower === following) {
            return res.status(400).json({ message: "Why you follow yourself? You have no friends?" });
        }
        const newFollowStatus = await FollowerModel.create({ follower, following });
        return res.status(201).json({ newFollowStatus });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in followUser: ", error.message);
    }

}

// accept a follow request
const acceptFollowRequest = async (req, res) => {
    const { userID } = req.body;
    try {
        const followStatus = await FollowerModel.findOne({ userID });
        if (!followStatus) {
            return res.status(404).json({ message: "Maybe this follow request is on your imagination" });
        }

        // accept the follow request
        followStatus.isAccepted = true;
        await followStatus.save();
        return res.status(200).json({ followStatus });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in acceptFollow: ", error.message);
    }
}

// reject a follow request
const rejectFollowRequest = async (req, res) => {
    const { userID } = req.body;
    try {
        const followStatus = await FollowerModel.findOne({ userID });
        if (!followStatus) {
            return res.status(404).json({ message: "Maybe this follow request is on your imagination" });
        }

        // Delete the follow request
        await FollowerModel.deleteOne({ followStatus });
        return res.status(200).json({ message: "Follow request rejected and removed" });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in rejectFollow: ", error.message);
    }
};

// get all followers of the user
const getAllFollowerAndFollowing = async (req, res) => {
    const { userID } = req.body;
    try {
        const followers = await FollowerModel.find({ following: userID, isAccepted: true });
        const followerUsernames = followers.map(follower => follower.follower);
        const followerCount = followers.length;

        const followings = await FollowerModel.find({ follower: userID, isAccepted: true });
        const followingUsernames = followings.map(following => following.following);
        const followingCount = followings.length;

        return res.status(200).json({ followerUsernames, followerCount, followingUsernames, followingCount });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getAllFollowerAndFollowing: ", error.message);
    }

}

const checkFollow = async (req, res) => {
    const { follower, following } = req.body;
    try {
        const followStatus = await FollowerModel.findOne({ follower, following });
        return res.status(200).json({ followStatus });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in checkFollow: ", error.message);
    }

}


export { followUserRequest, acceptFollowRequest, rejectFollowRequest, getAllFollowerAndFollowing, checkFollow };