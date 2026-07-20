const SENHA_ADMIN = "10092008";


let produtos = JSON.parse(
localStorage.getItem("produtos")
) || [];


let pedidos = JSON.parse(
localStorage.getItem("pedidos")
) || [];



function salvar(){

localStorage.setItem(
"produtos",
JSON.stringify(produtos)
);

localStorage.setItem(
"pedidos",
JSON.stringify(pedidos)
);

}



function listarProdutos(){

return produtos;

}



function buscarProduto(id){

return produtos.find(
p=>p.id==id
);

}



function adicionarProduto(produto){

produto.id = Date.now();

produto.data =
new Date().toLocaleDateString("pt-BR");


produtos.push(produto);

salvar();

}




function editarProduto(id,dados){

let p = buscarProduto(id);


if(p){

Object.assign(p,dados);

salvar();

}

}




function excluirProduto(id){

produtos =
produtos.filter(
p=>p.id!=id
);


salvar();

}





function criarPedido(dados){

dados.id=Date.now();

dados.status="Pendente";


pedidos.push(dados);


salvar();

}



function listarPedidos(){

return pedidos;

}
