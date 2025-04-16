//implementa acessp para a tela de login
function acessar (){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
    
    //implementa estrutura que testa se todos os campos foram preenchidos
    if(!loginEmail || !loginSenha){
        alert("favor preencher todos os campos");
    }else{
        window.location.href = "cadastro.html";
    }
}

// cria variavel do tipo array
var dadoslista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){
        dadoslista.push(nomeUser);
        console.log(dadoslista);
        criaLista();
        document.getElementById('nomeUser').value = "";
    }else {
        alert("favor informar um nome para cadastro");
    }
}

// função para preencher a lista de cadastro

function criaLista(){
    let tabela = "<tr><th>Nome</th> <th>Ações</th></tr>";
    for(let i = 0; i <= (dadoslista.length -1); i++){
        tabela += "<tr><th>" + dadoslista[i] + "</td><td><button class='btn btn-warning'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

//função para excluir nome da lista
function excluir(i){
    dadoslista.splice((i-1), 1);
    document.getElementById('tabela').deleteRow(i);
}

function editar(i){
    document.getElementById('nomeUser').value = dadoslista[(i - 1)];
    dadoslista.splice(dadoslista[(i - 1)], 1);
}