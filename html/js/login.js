/*function guardanome(){
    const nome = document.getElementById("nome")

    const dados = JSON.parse(localStorage.getItem("dadonome"))

    if(dados == null){
        localStorage.setItem("dadonome","[]")
        dados =[]
    }

    const registro = {
        user: nome.value
    }
    dados.push(registro)
    localStorage.setItem("dadonome",JSON.stringify(dados))
}*/

function guardanome(){
    const nome = document.getElementById("nome")
    const email = document.getElementById("email")

    const dados = JSON.parse(localStorage.getItem("dadosUsuario"))

    if(dados == null){
        localStorage.setItem("dadosUsuario","[]")
        dados =[]

    }

    const registro = {
        user: nome.value,
        eseremail: email.value,
    }
    dados.push(registro)
    localStorage.setItem("dadosUsuario",JSON.stringify(dados))
    alert("Dados do usuario guardados com sucesso!")
    nome.value = ""
    email.value = ""        
    //localStorage.clear()
}

