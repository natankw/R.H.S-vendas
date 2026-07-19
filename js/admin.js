let logado = false;
let editando = null;



function entrar(){

    const senhaDigitada = document.getElementById("senha").value;


    if(senhaDigitada === SENHA_ADMIN){


        logado = true;


        document.getElementById("login").style.display = "none";

        document.getElementById("painel").style.display = "block";


        listar();


    }else{


        alert("❌ Senha incorreta");


    }

}




function salvarProduto(){


    if(!logado) return;



    const dados = {


        nome: document.getElementById("nome").value,


        imagem: document.getElementById("imagem").value,


        descricao: document.getElementById("descricao").value,


        preco: document.getElementById("preco").value,


        whatsapp: document.getElementById("whatsapp").value


    };




    if(editando){


        editarProduto(editando,dados);


        editando = null;



    }else{


        adicionarProduto(dados);


    }




    alert("✅ Produto salvo");


    limpar();


    listar();



}







function listar(){


    const area = document.getElementById("lista");


    if(!area) return;



    area.innerHTML = "";




    listarProdutos().forEach(produto=>{



        area.innerHTML += `


        <div class="card">


        <img src="${produto.imagem}" class="thumb">


        <h3>${produto.nome}</h3>


        <p>💰 R$ ${produto.preco}</p>


        <p>${produto.descricao}</p>



        <a href="produto.html?id=${produto.id}" target="_blank">

        🔗 Ver produto

        </a>



        <br><br>



        <button onclick="editar(${produto.id})">

        ✏️ Editar

        </button>



        <button onclick="excluir(${produto.id})">

        🗑 Excluir

        </button>



        </div>


        `;


    });


}







function editar(id){


    const produto = buscarProduto(id);


    if(!produto) return;



    document.getElementById("nome").value = produto.nome;


    document.getElementById("imagem").value = produto.imagem;


    document.getElementById("descricao").value = produto.descricao;


    document.getElementById("preco").value = produto.preco;


    document.getElementById("whatsapp").value = produto.whatsapp;



    editando = id;


}







function excluir(id){


    if(confirm("Excluir produto?")){


        excluirProduto(id);


        listar();


    }


}







function limpar(){


    document.querySelectorAll("input, textarea")

    .forEach(campo=>campo.value="");


      }
