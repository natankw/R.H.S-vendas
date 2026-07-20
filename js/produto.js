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
        📂 Categoria: ${produto.categoria}
        </p>



        <p>
        📦 Tipo: ${produto.tipo}
        </p>



        <button onclick="comprar()">

        🛒 Comprar agora

        </button>


    </div>


    `;


}






function comprar(){


    const dados = {


        id: produto.id,


        nome: produto.nome,


        preco: produto.preco



    };




    fetch("http://localhost:3000/criar-pagamento",{


        method:"POST",


        headers:{


            "Content-Type":"application/json"


        },


        body: JSON.stringify(dados)



    })



    .then(res=>res.json())


    .then(data=>{


        console.log(data);



        alert(
        "✅ Pedido enviado para pagamento"
        );


    })



    .catch(error=>{


        console.log(error);



        alert(
        "❌ Servidor de pagamento offline"
        );


    });



}
