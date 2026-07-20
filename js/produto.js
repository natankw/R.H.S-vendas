const area = document.getElementById("produto");


const id = new URLSearchParams(
    window.location.search
).get("id");



const produto = buscarProduto(id);



if(!produto){


    area.innerHTML = `

    <div class="card">

        <h1>❌ Produto não encontrado</h1>

    </div>

    `;


}else{


    area.innerHTML = `


    <div class="card produto">


        <img 
        src="${produto.imagem}" 
        class="thumb"
        >



        <h1>
        ${produto.nome}
        </h1>



        <p>
        ${produto.descricao}
        </p>



        <h2>
        💰 R$ ${produto.preco}
        </h2>



        <p>
        📂 Categoria:
        ${produto.categoria}
        </p>



        <p>
        📦 Tipo:
        ${produto.tipo}
        </p>



        <p>
        🚚 Entrega:
        ${produto.entrega}
        </p>



        <button onclick="comprar()">

        🛒 Comprar agora

        </button>



    </div>


    `;


}








function comprar(){


    const cliente = prompt(
        "Digite seu nome:"
    );



    const whatsapp = prompt(
        "Digite seu WhatsApp com DDD:"
    );




    if(!cliente || !whatsapp){


        alert(
        "❌ Preencha todos os dados"
        );


        return;


    }





    const pedido = {


        id: Date.now(),


        produtoId: produto.id,


        produto: produto.nome,


        preco: produto.preco,


        cliente: cliente,


        whatsapp: whatsapp,


        data:
        new Date().toLocaleDateString("pt-BR"),


        status:"Pendente"



    };





    criarPedido(pedido);





    alert(
    "✅ Pedido enviado com sucesso!"
    );


}
