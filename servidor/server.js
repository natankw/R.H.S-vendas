const express = require("express");
const cors = require("cors");


const app = express();


app.use(cors());

app.use(express.json());



// teste do servidor

app.get("/", (req,res)=>{

    res.json({
        status:"Servidor online"
    });

});



// criar pagamento (vamos ativar depois)

app.post("/criar-pagamento",(req,res)=>{


    const produto = req.body;



    res.json({

        mensagem:"Pagamento ainda não configurado",

        produto: produto

    });


});




const PORT = 3000;


app.listen(PORT,()=>{

    console.log(
        "Servidor rodando na porta "+PORT
    );

});
