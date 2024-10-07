const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/servicesDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Definindo o schema e o modelo de Serviços
const serviceSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});

const Service = mongoose.model('Service', serviceSchema);

// Rotas para serviços

// Rota para adicionar serviço
app.post('/services', async (req, res) => {
    const service = new Service(req.body);
    await service.save();
    res.send(service);
});

// Rota para listar todos os serviços
app.get('/services', async (req, res) => {
    const services = await Service.find();
    res.send(services);
});

// Rota para editar um serviço por ID
app.put('/services/:id', async (req, res) => {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(service);
});

// Rota para deletar um serviço por ID
app.delete('/services/:id', async (req, res) => {
    await Service.findByIdAndDelete(req.params.id);
    res.send({ message: 'Serviço deletado com sucesso' });
});

// Iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
