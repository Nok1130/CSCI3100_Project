/*
    Still under development fuck
*/

/* eslint-disable no-unused-vars */
import multer from "multer";
import path from "path";

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         // eslint-disable-next-line no-undef
//         cb(null, path.join(_dirname, "../uploads"));
//     },
//     filename: function (req, file, cb) {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     },  
// });

const storage = multer.memoryStorage();

const uploadImage = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            return cb(new Error("Only Image file type is supported!"));
        }
        cb(null, true);
    },
});

const uploadVideo = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 20,
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
        }
    },
});

export { uploadImage, uploadVideo };
