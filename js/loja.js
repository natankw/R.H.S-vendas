const area = document.getElementById("produtos");

const busca = document.getElementById("pesquisar");



let categoriaAtual = "Todos";






function mostrarProdutos(){


    area.innerHTML = "";



    let produtos =
    listarProdutos();



    if(categoriaAtual !== "Todos"){


        produtos =
        produtos.filter(
        p=>p.categoria === categoriaAtual
        );


    }





    if(produtos.length === 0){


        area.innerHTML = `

        <div class="card">

        <h2>
        Nenhum produto encontrado
        </h2>

        </div>

        `;


        return;


    }





    produtos.forEach(produto=>{


        area.innerHTML += `


        <div class="card">


        <img 
        src="${produto.imagem}"
        class="thumb"
        >



        <h2>
        ${produto.nome}
        </h2>



        <p>
        ${produto.categoria}
        </p>



        <p>
        ${produto.descricao.substring(0,80)}...
        </p>



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








function filtrar(categoria){


    categoriaAtual = categoria;


    mostrarProdutos();



}








busca.addEventListener(
"input",
()=>{


    let texto =
    busca.value.toLowerCase();



    document
    .querySelectorAll(".card")
    .forEach(card=>{


        card.style.display =
        card.innerText
        .toLowerCase()
        .includes(texto)

        ? "block"

        : "none";


    });


});







mostrarProdutos();
