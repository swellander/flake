const router = require('express').Router();

const { upload } = require('../../client/src/awsUtils/image.js');

router.post('/', (req, res, next) => {
  upload(req.body.data, req.body.bucket)
    .then(imageUrl => {
      res.send(imageUrl);
    })
    .catch(next);
});

module.exports = router;
