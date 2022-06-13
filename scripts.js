function destaque1() {
    let elemento = document.querySelector('.opcao1');
    elemento.classList.toggle('destaque');
    let icone = document.querySelector('.opcao1 ion-icon');
    icone.classList.toggle('desaparecer')
}

function destaque2() {
    let elemento = document.querySelector('.opcao2');
    elemento.classList.toggle('destaque');
    let icone = document.querySelector('.opcao2 ion-icon');
    icone.classList.toggle('desaparecer')
}

function destaque3() {
    let elemento = document.querySelector('.opcao3');
    elemento.classList.toggle('destaque');
    let icone = document.querySelector('.opcao3 ion-icon');
    icone.classList.toggle('desaparecer')
}

function destaque4() {
    let elemento = document.querySelector('.opcao4');
    elemento.classList.toggle('destaque');
    let icone = document.querySelector('.opcao4 ion-icon');
    icone.classList.toggle('desaparecer')
}

function destaque5() {
    let elemento = document.querySelector('.opcao5');
    elemento.classList.toggle('destaque');
    let icone = document.querySelector('.opcao5 ion-icon');
    icone.classList.toggle('desaparecer')
}

function destaque6() {
    let elemento = document.querySelector('.opcao6');
    elemento.classList.toggle('destaque');
    let icone = document.querySelector('.opcao6 ion-icon');
    icone.classList.toggle('desaparecer')
}

function destaque7() {
    let elemento = document.querySelector('.opcao7');
    elemento.classList.toggle('destaque');
    let icone = document.querySelector('.opcao7 ion-icon');
    icone.classList.toggle('desaparecer')
}

function destaque8() {
    let elemento = document.querySelector('.opcao8');
    elemento.classList.toggle('destaque');
    let icone = document.querySelector('.opcao8 ion-icon');
    icone.classList.toggle('desaparecer')
}

function destaque9() {
    let elemento = document.querySelector('.opcao9');
    elemento.classList.toggle('destaque');
    let icone = document.querySelector('.opcao9 ion-icon');
    icone.classList.toggle('desaparecer')
}

function escolher_comida1() {
    let elemento1 = document.querySelector('.opcao1');
    let elemento2 = document.querySelector('.opcao2');
    let icone2 = document.querySelector('.opcao2 ion-icon');
    let elemento3 = document.querySelector('.opcao3');
    let icone3 = document.querySelector('.opcao3 ion-icon');
    if (elemento1.classList.contains('destaque')) {
        elemento2.classList.remove('destaque');
        icone2.classList.add('desaparecer');
        elemento3.classList.remove('destaque');
        icone3.classList.add('desaparecer');
    }
}

function escolher_comida2() {
    let elemento1 = document.querySelector('.opcao1');
    let icone1 = document.querySelector('.opcao1 ion-icon');
    let elemento2 = document.querySelector('.opcao2');
    let elemento3 = document.querySelector('.opcao3');
    let icone3 = document.querySelector('.opcao3 ion-icon');
    if (elemento2.classList.contains('destaque')) {
        elemento1.classList.remove('destaque');
        icone1.classList.add('desaparecer');
        elemento3.classList.remove('destaque');
        icone3.classList.add('desaparecer');
    }
}

function escolher_comida3() {
    let elemento1 = document.querySelector('.opcao1');
    let icone1 = document.querySelector('.opcao1 ion-icon');
    let elemento2 = document.querySelector('.opcao2');
    let icone2 = document.querySelector('.opcao2 ion-icon');
    let elemento3 = document.querySelector('.opcao3');
    if (elemento3.classList.contains('destaque')) {
        elemento1.classList.remove('destaque');
        icone1.classList.add('desaparecer');
        elemento2.classList.remove('destaque');
        icone2.classList.add('desaparecer')
    }
}

function escolher_bebida4() {
    let elemento4 = document.querySelector('.opcao4');
    let elemento5 = document.querySelector('.opcao5');
    let icone5 = document.querySelector('.opcao5 ion-icon');
    let elemento6 = document.querySelector('.opcao6');
    let icone6 = document.querySelector('.opcao6 ion-icon');
    if (elemento4.classList.contains('destaque')) {
        elemento5.classList.remove('destaque');
        icone5.classList.add('desaparecer');
        elemento6.classList.remove('destaque');
        icone6.classList.add('desaparecer');
    }
}

function escolher_bebida5() {
    let elemento4 = document.querySelector('.opcao4');
    let icone4 = document.querySelector('.opcao4 ion-icon');
    let elemento5 = document.querySelector('.opcao5');
    let elemento6 = document.querySelector('.opcao6');
    let icone6 = document.querySelector('.opcao6 ion-icon');
    if (elemento5.classList.contains('destaque')) {
        elemento4.classList.remove('destaque');
        icone4.classList.add('desaparecer');
        elemento6.classList.remove('destaque');
        icone6.classList.add('desaparecer');
    }
}

function escolher_bebida6() {
    let elemento4 = document.querySelector('.opcao4');
    let icone4 = document.querySelector('.opcao4 ion-icon');
    let elemento5 = document.querySelector('.opcao5');
    let icone5 = document.querySelector('.opcao5 ion-icon');
    let elemento6 = document.querySelector('.opcao6');
    if (elemento6.classList.contains('destaque')) {
        elemento4.classList.remove('destaque');
        icone4.classList.add('desaparecer');
        elemento5.classList.remove('destaque');
        icone5.classList.add('desaparecer')
    }
}

function escolher_sobremesa7() {
    let elemento7 = document.querySelector('.opcao7');
    let elemento8 = document.querySelector('.opcao8');
    let icone8 = document.querySelector('.opcao8 ion-icon');
    let elemento9 = document.querySelector('.opcao9');
    let icone9 = document.querySelector('.opcao9 ion-icon');
    if (elemento7.classList.contains('destaque')) {
        elemento8.classList.remove('destaque');
        icone8.classList.add('desaparecer');
        elemento9.classList.remove('destaque');
        icone9.classList.add('desaparecer');
    }
}

function escolher_sobremesa8() {
    let elemento7 = document.querySelector('.opcao7');
    let icone7 = document.querySelector('.opcao7 ion-icon');
    let elemento8 = document.querySelector('.opcao8');
    let elemento9 = document.querySelector('.opcao9');
    let icone9 = document.querySelector('.opcao9 ion-icon');
    if (elemento8.classList.contains('destaque')) {
        elemento7.classList.remove('destaque');
        icone7.classList.add('desaparecer');
        elemento9.classList.remove('destaque');
        icone9.classList.add('desaparecer');
    }
}

function escolher_sobremesa9() {
    let elemento7 = document.querySelector('.opcao7');
    let icone7 = document.querySelector('.opcao7 ion-icon');
    let elemento8 = document.querySelector('.opcao8');
    let icone8 = document.querySelector('.opcao8 ion-icon');
    let elemento9 = document.querySelector('.opcao9');
    if (elemento9.classList.contains('destaque')) {
        elemento7.classList.remove('destaque');
        icone7.classList.add('desaparecer');
        elemento8.classList.remove('destaque');
        icone8.classList.add('desaparecer')
    }
}

function finalizar() {
    let elemento1 = document.querySelector('.opcao1');
    let elemento2 = document.querySelector('.opcao2');
    let elemento3 = document.querySelector('.opcao3');
    let elemento4 = document.querySelector('.opcao4');
    let elemento5 = document.querySelector('.opcao5');
    let elemento6 = document.querySelector('.opcao6');
    let elemento7 = document.querySelector('.opcao7');
    let elemento8 = document.querySelector('.opcao8');
    let elemento9 = document.querySelector('.opcao9');
    let elemento10 = document.querySelector('.confirma p:nth-child(1)');
    let elemento11 = document.querySelector('.confirma p:nth-child(2)');
    let elemento12 = document.querySelector('.confirma');
    if ((elemento1.classList.contains('destaque') || elemento2.classList.contains('destaque') || elemento3.classList.contains('destaque')) && (elemento4.classList.contains('destaque') || elemento5.classList.contains('destaque') || elemento6.classList.contains('destaque')) && (elemento7.classList.contains('destaque') || elemento8.classList.contains('destaque') || elemento9.classList.contains('destaque'))) {
        elemento10.classList.add('texto-pre-selecao');
        elemento11.classList.remove('texto-pos-selecao');
        elemento12.classList.add('pos-selecao')
    }
}

function enviar_mensagem() {
    let preco = 0
    let comida
    let elemento1 = document.querySelector('.opcao1');
    let elemento2 = document.querySelector('.opcao2');
    let elemento3 = document.querySelector('.opcao3');
    if (elemento1.classList.contains('destaque')) {
        comida = 'Strogonoff'
        preco += 28
    } else if (elemento2.classList.contains('destaque')) {
        comida = 'Japonês'
        preco += 50
    } else if (elemento3.classList.contains('destaque')) {
        comida = 'Churrasco'
        preco += 47
    }

    let bebida
    let elemento4 = document.querySelector('.opcao4');
    let elemento5 = document.querySelector('.opcao5');
    let elemento6 = document.querySelector('.opcao6');
    if (elemento4.classList.contains('destaque')) {
        bebida = 'Coca-cola'
        preco += 7
    } else if (elemento5.classList.contains('destaque')) {
        bebida = 'Heineken'
        preco += 12
    } else if (elemento6.classList.contains('destaque')) {
        bebida = 'Suco'
        preco += 20
    }

    let sobremesa
    let elemento7 = document.querySelector('.opcao7');
    let elemento8 = document.querySelector('.opcao8');
    let elemento9 = document.querySelector('.opcao9');
    if (elemento7.classList.contains('destaque')) {
        sobremesa = 'Torta-alemã'
        preco += 35
    } else if (elemento8.classList.contains('destaque')) {
        sobremesa = 'Quindim'
        preco += 17
    } else if (elemento9.classList.contains('destaque')) {
        sobremesa = 'Palha-italiana'
        preco += 13
    }

    preco = preco.toFixed(2)

    mensagem = `Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20pedido%3A%0A-%20Prato%3A%20${comida}%0A-%20Bebida%3A%20${bebida}%0A-%20Sobremesa%3A%20${sobremesa}%0ATotal%3A%20${preco}`

    if (comida && bebida && sobremesa && preco) {
        window.open(`https://wa.me/5521988965187/?text=${mensagem}`)
    }
}