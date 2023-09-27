const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");

function login() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")); if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Parabéns, você logou!";
                localStorage.setItem("logado", JSON.stringify(usuario));
                window.location.href = "./home.html";
                break;
            }
        }

    }
    alert(mensagem);

}
function cadastra() {
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }
        if(verificaSeExiste(campoNovoLogin.value, bancoDeDados)) {
            alert("Esse usuário ja está cadastrado")
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));

    } else {
        alert("As senhas são diferentes!");
    }
    alert("Usuário cadastrado com sucesso!");
}

function verificaSeExiste(login, banco){
    for(usuario of banco){
        if(login == usuario.login){
            return true;
        }
    }
    return false;
}
