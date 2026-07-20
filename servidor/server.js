const express = require("express");
const cors = require("cors");


const app = express();


app.use(cors());

app.use(express.json());





app.get("/", (req,res)=>{


    res.json({

        online:true,

        mensagem:
        "Servidor da loja online"

    });


});








// Criar pedido

app.post("/pedido",(req,res)=>{


    const dados = req.body;



    console.log(
    "Novo pedido:",
    dados
    );



    res.json({


        sucesso:true,


        mensagem:
        "Pedido recebido"


    });



});








// Pagamento (Mercado Pago será colocado depois)

app.post("/pagamento",(req,res)=>{


    res.json({


        sucesso:false,


        mensagem:
        "Mercado Pago ainda não configurado"


    });


});







const PORT = 3000;



app.listen(PORT,()=>{


    console.log(
    "Servidor rodando na porta "
    +PORT
    );


});
