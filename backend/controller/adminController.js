import UserModel from "../model/User.js";


const suspendUser = async (req, res) => {
    const { userID } = req.params;

    try {
        // query the user database using userID
        const user = await UserModel.findOne({ userID });

        // if user not found
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // update the user profile
        user.isSuspended = true;
        await user.save();
        return res.status(200).json({ user });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in suspendUser: ", error.message);
    }
};

const deleteUser = async (req, res) => {
    const { userID } = req.params;

    try {
        // query the user database using userID
        const user = await UserModel.findOne({ userID });

        // if user not found
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // delete the user profile
        await UserModel.deleteOne({ userID });
        return res.status(200).json({ message: "User deleted successfully" });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in delelteUser: ", error.message);
    }
};


export { suspendUser, deleteUser };