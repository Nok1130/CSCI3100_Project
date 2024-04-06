/*
    Still under development fuck
*/

/* eslint-disable no-unused-vars */
import multer from "multer";
import path from "path";
import { GridFsStorage } from "multer-gridfs-storage";

// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // const storage = multer.memoryStorage();

// const uploadImage = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5,
//     },
//     fileFilter: (req, file, cb) => {
//         if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//             return cb(new Error("Only Image file type is supported!"));
//         }
//         cb(null, true);
//     },
// });

// Set up Multer storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'backend/uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
// Create Multer instance
const upload = multer({ storage: storage });
// eslint-disable-next-line no-undef
const uploadPersonalIcon = upload.single('icon');

// const uploadVideo = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 20,
//     },
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
//         }
//     },
// });

export { uploadPersonalIcon };
