const express = require('express')
const router = express.Router()
const ibmdb = require('ibm_db')

router.get('/postagens', (req, res) => {
    
    ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-03.services.dal.bluemix.net;UID=mhh09699;PWD=z90km068zw@8z21p;PORT=50000;PROTOCOL=TCPIP", (err, conn) =>{
        if (err){
            return console.log(err)
        }

        conn.query('select * from MHH09699.POSTAGENS', (err, data) =>{
            if (err){
                console.log({erro: err})
            }else{
                console.log(data)
                res.send(data)
            }
        })

        conn.close(() =>{
            console.log('conexão encerrada')
        })

    })
})

router.get('/postagens/new', (req, res) =>{
    ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-03.services.dal.bluemix.net;UID=mhh09699;PWD=z90km068zw@8z21p;PORT=50000;PROTOCOL=TCPIP", (err, conn) =>{
        if(err){
            return console.log({erro: err, mensagem: 'connection failed'})
        }
        conn.query(`INSERT INTO MHH09699.POSTAGENS (TITULO,CONTEUDO,AUTOR) values ('${req.query.titulo}','${req.query.conteudo}','${req.query.autor}')`, (err, data) =>{
            if(err) {
                console.log({erro: err, mensagem: 'Query insert filed'})
            }else {
                console.log(data)
                res.send('Post successful')
            }
            conn.close(() =>{
                console.log('conexão encerrada')
            })
        })
    }) 
})

module.exports = router