let logado = false;

let editando = null;



function login(){


    const senha =
    document.getElementById("senha").value;



    if(senha === SENHA_ADMIN){


        logado = true;


        document.getElementById("loginBox").style.display = "none";


        document.getElementById("painel").style.display = "block";


        listarProdutosAdmin();

        listarPedidosAdmin();



    }else{


        alert("❌ Senha incorreta");


    }


}






function salvar(){


    if(!logado) return;



    const produto = {


        nome:
        document.getElementById("nome").value,


        imagem:
        document.getElementById("imagem").value,


        categoria:
        document.getElementById("categoria").value,


        descricao:
        document.getElementById("descricao").value,


        preco:
        document.getElementById("preco").value,


        tipo:
        document.getElementById("tipo").value,


        entrega:
        document.getElementById("entrega").value



    };





    if(editando){


        editarProduto(
        editando,
        produto
        );


        editando = null;



    }else{


        adicionarProduto(produto);



    }





    alert("✅ Produto salvo");


    limpar();


    listarProdutosAdmin();



}








function listarProdutosAdmin(){


    const area =
    document.getElementById("lista");



    if(!area) return;



    area.innerHTML = "";





    listarProdutos().forEach(produto=>{


        area.innerHTML += `


        <div class="card">


        <img src="${produto.imagem}" class="thumb">


        <h3>
        ${produto.nome}
        </h3>


        <p>
        💰 R$ ${produto.preco}
        </p>


        <p>
        ${produto.categoria}
        </p>



        <a href="produto.html?id=${produto.id}" target="_blank">

        🔗 Abrir produto

        </a>


        <br><br>




        <button onclick="editar(${produto.id})">

        ✏️ Editar

        </button>



        <button onclick="deletar(${produto.id})">

        🗑 Excluir

        </button>



        </div>



        `;


    });



}







function editar(id){


    const produto =
    buscarProduto(id);



    if(!produto) return;



    document.getElementById("nome").value =
    produto.nome;


    document.getElementById("imagem").value =
    produto.imagem;


    document.getElementById("categoria").value =
    produto.categoria;


    document.getElementById("descricao").value =
    produto.descricao;


    document.getElementById("preco").value =
    produto.preco;


    document.getElementById("tipo").value =
    produto.tipo;


    document.getElementById("entrega").value =
    produto.entrega;



    editando = id;


}








function deletar(id){


    if(confirm("Excluir produto?")){


        excluirProduto(id);


        listarProdutosAdmin();


    }


}








function listarPedidosAdmin(){


    const area =
    document.getElementById("pedidos");



    if(!area) return;



    const pedidos =
    pegarPedidos();



    area.innerHTML = "";




    if(pedidos.length === 0){


        area.innerHTML = `

        <div class="card">

        📭 Nenhum pedido

        </div>

        `;


        return;


    }






    pedidos.forEach(pedido=>{


        area.innerHTML += `


        <div class="card">


        <h3>
        📦 ${pedido.produto}
        </h3>



        <p>
        👤 ${pedido.cliente}
        </p>



        <p>
        📱 ${pedido.whatsapp}
        </p>



        <p>
        💰 R$ ${pedido.preco}
        </p>



        <p>
        📅 ${pedido.data}
        </p>



        <p>
        🔄 ${pedido.status}
        </p>



        <a href="https://wa.me/55${pedido.whatsapp}" target="_blank">

        <button>

        💬 WhatsApp

        </button>

        </a>



        <button onclick="entregue(${pedido.id})">

        ✅ Entregue

        </button>



        </div>


        `;


    });



}








function entregue(id){


    let pedidos =
    pegarPedidos();



    let pedido =
    pedidos.find(
    p=>p.id == id
    );



    if(pedido){


        pedido.status = "Entregue";



        localStorage.setItem(
        "pedidos",
        JSON.stringify(pedidos)
        );



        listarPedidosAdmin();


    }


}








function limpar(){


    document
    .querySelectorAll("input, textarea")
    .forEach(campo=>{


        campo.value="";


    });


}
