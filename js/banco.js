const SENHA_ADMIN = "10092008";


let produtos = JSON.parse(
    localStorage.getItem("produtos")
) || [];



function salvarBanco(){

    localStorage.setItem(
        "produtos",
        JSON.stringify(produtos)
    );

}



function listarProdutos(){

    return produtos;

}



function buscarProduto(id){

    return produtos.find(
        item => item.id == id
    );

}



function adicionarProduto(dados){

    dados.id = Date.now();

    dados.data = new Date()
    .toLocaleDateString("pt-BR");


    produtos.push(dados);


    salvarBanco();

}




function editarProduto(id,dados){

    const produto = buscarProduto(id);


    if(produto){

        Object.assign(produto,dados);

        salvarBanco();

    }

}




function excluirProduto(id){

    produtos = produtos.filter(
        item => item.id != id
    );


    salvarBanco();

}
