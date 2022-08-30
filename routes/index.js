module.exports = (app) =>{
    //definara resposta para req '/'
    app.get('/',(req,res)=>{
        res.render('index.ejs')
    })
}