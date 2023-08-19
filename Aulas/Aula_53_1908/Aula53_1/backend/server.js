const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 8070
const connectionString = "mongodb+srv://Murilo20H:Murilo20H@appdbaula.cxeaimf.mongodb.net/"
const Pagamento = require('./models/pagamento')

app.use(express.json())
app.use(cors())

app.get("/listar-pagamentos", async (req, res) => {
    try {
        let pagamentos = await Pagamento.find()
        return res.status(200).json(pagamentos)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.get("/listar", async (req, res) => {
    try {
        let dataReferencia = req.query.dataPagamento
        let pagamentoTotal = 0
        // filtro por data
        let pagamentos = await Pagamento.find({ dataPagamento: dataReferencia })
        for (let pagamento of pagamentos) {
            pagamentoTotal += pagamento.valorPagamento
        }
        return res.status(200).json(pagamentoTotal)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post("/cadastrar-pagamento", async (req, res) => {
    let pagamento = { ...req.body }
    let pagamentoValido = pagamento.tipoPagamento.toUpperCase() != "C" && pagamento.tipoPagamento.toUpperCase() != "D"
    if (pagamentoValido){
        return res.status(400).json('Forma de pagamento inválida - tente apenas [C ou D]')
    }
    try {
        await Pagamento.create(pagamento)
        return res.status(201).json({ message: "Pagamento criado com sucesso!" })
    } catch (error) {
        return res.status(500).json(error)
    }
})

mongoose.connect(connectionString, {
    dbName: "DevsSupermarket"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})