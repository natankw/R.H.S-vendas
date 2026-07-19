const area = document.getElementById("produtos");



function carregarProdutos(){


    area.innerHTML = "";



    listarProdutos().forEach(produto=>{


        area.innerHTML += `


        <div class="card">


        <img src="${produto.imagem}" class="thumb">



        <h2>${produto.nome}</h2>



        <p>${produto.descricao}</p>



        <h3>
        💰 R$ ${produto.preco}
        </h3>



        <a href="produto.html?id=${produto.id}">


        <button>

        Ver produto

        </button>


        </a>



        </div>


        `;


    });


}



carregarProdutos();
