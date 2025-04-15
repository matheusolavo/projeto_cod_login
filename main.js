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
        document.getElementById('nomeUser').value = "";

    }
}