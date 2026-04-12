function enviar() { 
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passos = document.getElementById('passos')
    let res = document.getElementById('resposta')

    // Verifica se os campos estão vazios
    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        res.innerHTML = 'Impossível contar! Faltam dados.'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            // Contagem progressiva
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} ` // Adiciona um emoji de seta
            }
        } else {
            // Contagem regressiva (Caso o início seja maior que o fim)
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}` // Emoji de bandeira no fim
    }
}