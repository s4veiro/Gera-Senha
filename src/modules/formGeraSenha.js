import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qntd-caratceres');
const chkMaiuscula = document.querySelector('.chk-maiusculas');
const chkMinuscula = document.querySelector('.chk-minusculas');
const chknum = document.querySelector('.chk-numeros');
const chksimbolo = document.querySelector('.chk-simbolos');
const gerarSenhaBtn = document.querySelector('.btn-gerar');

export default () => {
    gerarSenhaBtn.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();

    });
}

function gera(){
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiuscula.checked,
        chkMinuscula.checked,
        chknum.checked,
        chksimbolo.checked
    );
    return senha || 'Nada selecionado';
}