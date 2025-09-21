import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {   // file here is for access to the files coz we're using multer
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {
     // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) as of now we dont need this.
    cb(null, file.originalname)
  }
})

export const upload = multer({ 
    storage, 
})


