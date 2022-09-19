const express = require('express');
const CommentModel = require('../Models/CommentModel');

const router = express.Router();

router.post('/', async (req, res) => {
  // console.log(req.body)
  const feedback = new CommentModel({
    comment: req.body.comment,
    company: req.body.company
  })
  try {
    const savedComment = await feedback.save();
    res.status(200).send({ message: "Feedback added", id: savedComment._id, comment: savedComment })
  } catch (error) {
    console.log(error)
    res.json({ message: error })
  }
})

router.get('/:companyName', async (req, res) => {
  // console.log(req.body)
  try {
    const feedbacks = await CommentModel.find({ company: req.params.companyName })
    // res.json(feedbacks)
    res.render('pages/company', { feedbacks: feedbacks, companyName: req.params.companyName })
  } catch (e) {
    console.log(error)
    res.json({ message: error })
  }
})

module.exports = router;