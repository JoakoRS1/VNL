const  express=require('express')
const PORT =8080
const bodyParser = require('body-parser')
const { render } = require('ejs')


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(express.static('assets'))
app.set('view engine','ejs')

app.get('/inicio',(req,res)=>{
    res.render('inicio')
})

app.listen(PORT,()=>{
    console.log(`El servidor se inicio con el puerto ${PORT}`)
})