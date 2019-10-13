const express = require('express')
const router = express.Router()

router.get('/comentarios/:postid', (req, res) => {
    res.json({
        conteudo: 'Um novo Comentário',
        autor: 'Maymisson Magno'
    })
})

module.exports = router