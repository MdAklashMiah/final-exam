const express = require('express')
const multer  = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueFilename = Date.now() + '-' + Math.round(Math.random() * 1E9)
    let filenameExtention = file.originalname.split(".")
    let extention = filenameExtention[filenameExtention.length -1]
    cb(null, file.fieldname + '-' + uniqueFilename + '.' + extention)
  }
})

const upload = multer({ storage: storage })

module.exports = upload