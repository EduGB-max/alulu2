const mongoose = require('mongoose')

const conexao = async()=>{

    const atlas = await mongoose.connect('mongodb+srv://user3tri:oi@fiaptecnico.zg8lq.mongodb.net/test')

const modelo = mongoose.Schema({

    estilo:String,
    imagem:String,
    titulo:String,
    texto:String,
    publicado:{type:Date, default:Date.now}
})
}