const crypto = require('./crypto');

const encrypted_key = crypto.encrypt("HelloWorld");
console.log(encrypted_key);
const decrypted_key = crypto.decrypt(encrypted_key);
console.log(decrypted_key);

// JWT
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
var { expressjwt: expressJWT } = require("express-jwt");
const cors = require('cors');
const corsOptions = {
  origin: "http://localhost:4091",
  methods: "GET, PUT, POST, DELETE",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true,
}

var cookieParser = require('cookie-parser')

const express = require('express');
const { usuario } = require('./models');

const app = express();

app.use(cors(corsOptions))

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(cookieParser());
app.use(
  expressJWT({
    secret: process.env.SECRET,
    algorithms: ["HS256"],
    getToken: req => req.cookies.token
  }).unless({ path: ["/autenticar", "/logar", "/deslogar"] })
);

app.get('/autenticar', async function(req, res){
  res.render('autenticar');
})

app.get('/', async function(req, res){
  res.render("home")
})

app.post('/logar', async (req, res) => {
  const u = await usuario.findOne({ where: { nome: req.body.name, senha: crypto.encrypt(req.body.password) } });
  if(u){
  const id = 1;
  const token = jwt.sign({id}, process.env.SECRET, {
    expiresIn: 300 //gera um token JWT 
  })
return res.cookie('token', token, {httpOnly : true}).json({
   name: u.name,
   token:token
});
  }
  res.status(500).json({mensagem:"Login Inválido"}) 
})



app.post('/deslogar', function(req, res) {
  res.cookie('token', null, {httpOnly:true});
  res.json({
    deslogado:true
  })
})

app.get('/usuarios/cadastrar', function(req, res) {
  res.render('cadastrar');
})

app.post('/usuarios/cadastrar', async function(req, res){
  try {
      const louco = {
        name: req.body.name,
        senha: crypto.encrypt(req.body.senha)
      }
      if(req.body.senha == req.body.confirmesenha){
        const stef = await usuario.create(louco);
        res.redirect('/usuarios/listar')
      }
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Ocorreu um erro ao criar o usuário.😢' });
  }
})

  app.get('/usuarios/listar', async function(req,res){
    try{
    var stef = await usuario.findAll();
    res.json(stef); 
  }catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Ocorreu um erro ao buscar os usuário.🤔' });
  }
  });


app.listen(4091, function() {
  console.log('App de Exemplo escutando na porta 4091!')
});