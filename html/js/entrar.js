function verifyEmail(){
    const nome = document.getElementById("nome")
    const email = document.getElementById("email")

    const dados = JSON.parse(localStorage.getItem("dadosUsuario"))

    if(nome.value == dados.user && email.value == dados.eseremail)
        alert("Este usuário já esta cadastrado");
    else
        alert("Este usuário ainda não esta cadastrado");
}

