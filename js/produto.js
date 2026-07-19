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


    <div class="card">


    <img src="${produto.imagem}" class="thumb">


    <h1>${produto.nome}</h1>


    <p>
    ${produto.descricao}
    </p>


    <h2>
    💰 R$ ${produto.preco}
    </h2>



    <button onclick="comprar()">

    🛒 Comprar agora

    </button>


    </div>


    `;



}





function comprar(){


    // Temporário: vamos trocar pelo checkout real

    window.location.href =
    "https://wa.me/"+produto.whatsapp+
    "?text=Olá, quero comprar o produto: "
    +produto.nome;


}
