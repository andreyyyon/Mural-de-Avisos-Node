const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
/*
    Separação de modelagem da nossa fonte de dados, tornando 
    mais solido a forma de consultar e manipular os nossos dados.
*/
const posts = require("../model/post");
/*
    CORS (Cross-Origin Resource Sharing) é um mecanismo de 
    segurança do navegador que impede que um frontend (por 
    exemplo, um site rodando em localhost:3000) acesse 
    recursos de uma API rodando em uma "origem" diferente 
    (por exemplo, seu servidor Node.js em localhost:5000).

    No Node.js, usamos um middleware (geralmente o pacote cors) 
    para enviar cabeçalhos HTTP específicos na resposta, dizendo 
    ao navegador quais outras origens (domínios e portas) têm 
    permissão para acessar sua API, resolvendo assim o bloqueio 
    de segurança.
*/ 
const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:3000"
}
router.use(cors(corsOptions));

router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", bodyParser.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post adicionado");
});

module.exports = router;