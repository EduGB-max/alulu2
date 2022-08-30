module.exports = (app) =>{
    //definara resposta para req '/'
    app.get('/generic',(req,res)=>{
        res.render('generic.ejs')
    })
}