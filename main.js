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