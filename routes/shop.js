const express=require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(
        '<form action="/admin/login" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>');
})

module.exports = router;
