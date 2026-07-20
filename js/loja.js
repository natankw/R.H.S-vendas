const area = document.getElementById("produtos");



function mostrarProdutos(lista){


area.innerHTML="";



if(lista.length === 0){


area.innerHTML = `

<div class="card">

<h2>Nenhum produto cadastrado</h2>

</div>

`;


return;


}





lista.forEach(produto=>{


area.innerHTML += `


<div class="card">


<img src="${produto.imagem}" class="thumb">


<h2>${produto.nome}</h2>



<p>

${produto.descricao}

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




mostrarProdutos(
listarProdutos()
);







document
.getElementById("pesquisar")
.addEventListener("input",function(){


const texto =
this.value.toLowerCase();



const resultado =
listarProdutos()
.filter(produto =>

produto.nome
.toLowerCase()
.includes(texto)

);



mostrarProdutos(resultado);



});
