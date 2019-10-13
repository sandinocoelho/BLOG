const express = require('express')
const router = express.Router()

router.get('/postagens', (req, res) => {
    res.json({
        titulo: 'Primeira postagem',
        conteudo: 'Uma nova publicação',
        autor: 'Maymisson Magno'
    })
})

module.exports = router