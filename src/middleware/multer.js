const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');        
    },
    filename: (req, file, cb) => {
        const nm = req.body.title;
        const wkt = req.body.waktu;
        // const timeStamp = new Date().getTime();
        // const originalname = file.originalname;

        cb(null, `${nm}-${wkt}.jpg`);
    }    
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 3 * 1000 * 1000 // 3MB
    }
});

module.exports = upload;