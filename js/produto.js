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


    const pedido = {


        produtoId: produto.id,


        nome: produto.nome,


        preco: produto.preco,


        data:
        new Date().toLocaleDateString("pt-BR"),


        status:"Pendente"



    };





    criarPedido(pedido);





    alert(
    "✅ Pedido criado! Aguarde a confirmação."
    );



}
