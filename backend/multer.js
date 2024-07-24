const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination : "./upload/images",
    filename: (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    // fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 } 
});

module.exports = upload;