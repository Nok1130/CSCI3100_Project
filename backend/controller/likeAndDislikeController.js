import LikeModel from "../model/Like.js";
import DislikeModel from "../model/Dislike.js";

// create a new like or dislike info
const likeAndDislikePost = async (req, res) => {
    const { userID, postID, isLike } = req.body;

    try {
        if (isLike) {
            const newLike = await LikeModel.create({ userID, postID });
            return res.status(201).json({ newLike });
        }
        else {
            const newDislike = await DislikeModel.create({ userID, postID });
            return res.status(201).json({ newDislike });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in like or dislike post: ", error.message);
    }

}

const likeAndDislikeCount = async (req, res) => {
    const { postID } = req.body;
    try {
        const likeCount = await LikeModel.countDocuments({ postID });

        const dislikeCount = await DislikeModel.countDocuments({ postID });
        return res.status(200).json({ likeCount, dislikeCount });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in likeCount: ", error.message);
    } 
}


export { likeAndDislikePost, likeAndDislikeCount };
