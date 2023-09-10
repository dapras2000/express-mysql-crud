const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');        
    },
    filename: (req, file, cb) => {
        const timeStamp = new Date().getTime();
        const originalname = file.originalname;

        cb(null, `${timeStamp}-${originalname}`);
    }    
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 3 * 1000 * 1000 // 3MB
    }
});

module.exports = upload;