const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 8060
const connectionString = "mongodb+srv://Murilo20H:Murilo20H@appdbaula.cxeaimf.mongodb.net/"
const Produto = require('./models/produto')

app.use(express.json())
app.use(cors())

app.get("/listar-produtos", async (req, res) => {
    try {
        let produtos = await Produto.find()
        return res.status(200).json(produtos)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post("/adicionar-produto", async (req, res) => {
    try {
        const { nome, descricao, imagem, valor, categoria } = req.body 
        let produto = {
            nome,
            descricao,
            imagem,
            valor,
            categoria
        }
        await Produto.create(produto)
        return res.status(200).json({ message: "Produto adicionado com sucesso!"})
    } catch (error) {
        return res.status(500).json(error)
    }
})

mongoose.connect(connectionString, {
    dbName: "ROUPAS"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})