//importar a config servidor
const {app, porta} = require('./config/servidor')

//executar o servidor
app.listen(porta,()=>{
    console.log('https://localhost:' + porta)
})

