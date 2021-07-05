const db = require('../models');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload')
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, Date.now() + '-' +file.originalname )
  }
});
var upload = multer({ storage: storage }).single('file')
const Contents = db.contents;
exports.allAccess = (req, res) => {
  res.status(200).send('Public Content.');
};

exports.userBoard = (req, res) => {
  res.status(200).send('User Content.');
};

exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.');
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send('Moderator Content.');
};

exports.addNewContent = (req, res) => {
  Contents.create({
    image: req.body.image,
    url: req.body.url,
    title: req.body.title,
    paragraph: req.body.paragraph,
    htitle: req.body.htitle,
    hdtitle: req.body.hdtitle
  }).then((newData) => {
    res.status(200).send('Succeed');
  })
  .catch((err) => {
    res.status(500).send({ message: err.message });
  });
}
exports.imageUpload = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
    }
  return res.status(200).send(req.file)
  })
}
exports.getList = (req, res) => {
  Contents.findAll()
  .then((newData) => {
    res.status(200).send(newData);
  })
  .catch((err) => {
    res.status(500).send({ message: err.message });
  });
}
