const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNum = () => String.fromCharCode(rand(48, 58));
const simbolo = '[]{}.,!@#$%^&*()-=+_|~~``?><';
const geraSimbolo = () => simbolo[rand(0, simbolo.length)];

export default function geraSenha(qtd, maius, minus, num, simb){

    const senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++){
        maius && senhaArray.push(geraMaiuscula());
        minus && senhaArray.push(geraMinuscula());
        num && senhaArray.push(geraNum());
        simb && senhaArray.push(geraSimbolo());

    }

     return (senhaArray.join('').slice(0, qtd));

}